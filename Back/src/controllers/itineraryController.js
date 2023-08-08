const axios = require('axios');
const { Itinerary } = require('../database');

const apiKey = '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';
// const apiKey = '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'; anterior

const generateItinerary = async (req, res) => {
  const { idPackage, continent, country, city, duration } = req.body;
  console.log('el body', req.body)

  try {
    // Construye la pregunta o solicitud al modelo de GPT-3.5 con los datos recibidos.
    const prompt = `¿Puedes ayudarme a crear un itinerario de viaje para ${duration} días en ${city}, ${country} en el continente ${continent}?`;

    // Realiza la solicitud a la API de OpenAI GPT-3.5.
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt,
        max_tokens: 1000, // Ajusta este valor según tus necesidades.
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    // Extrae la respuesta generada por el modelo y elimina los números al principio de cada línea.
    const itineraryText = response.data.choices[0].text.replace(/^[0-9]+: ?/gm, '');

    // Procesa el texto del itinerario para obtener un array de objetos con el número de día y el contenido del itinerario.
    const itineraryArray = [];
    let currentDay = 1;
    let currentActivity = '';

    const lines = itineraryText.split('\n');
    for (const line of lines) {
      if (line.startsWith('Día ')) {
        // Si ya hay una actividad registrada para el día actual, la agregamos al array.
        if (currentActivity !== '') {
          itineraryArray.push({ day: currentDay, itinerary: currentActivity.trim() });
        }
        currentDay = parseInt(line.split(' ')[1]);
        currentActivity = line.replace(line.split(' ')[0], '').trim(); // Eliminamos "Día X:"
      } else {
        // Concatenamos la línea al contenido de la actividad para el día actual.
        currentActivity += ' ' + line.trim();
      }
    }

    // Agregamos la última actividad al array.
    if (currentActivity !== '') {
      itineraryArray.push({ day: currentDay, itinerary: currentActivity.trim() });
    }

    // Eliminamos el primer elemento vacío si lo hay.
    if (itineraryArray.length > 0 && itineraryArray[0].itinerary === '') {
      itineraryArray.shift();
    }

    // Guarda el itinerario en la base de datos.
    await Itinerary.create({ itinerary: JSON.stringify(itineraryArray),idPackage: idPackage });

    // Responde con el itinerario al frontend.
    res.json({ itinerary: itineraryArray.map(({ day, itinerary }) => ({ day, itinerary: itinerary.trim() })) });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error('Error en la respuesta de la API:', error.response.data.error);
      res.status(500).json({ error: error.response.data.error });
    } else {
      console.error('Error al generar el itinerario:', error.message);
      res.status(500).json({ error: 'Hubo un problema al generar el itinerario.' });
    }
  }
};



// Controller para buscar un itinerario por id 
const getItineraryByid = async (id) => {
  const user = await Itinerary.findOne({ where: { id: id } });
  if (!user) {
    throw new Error("Itinerary no encontrado");
  }
  return user;
};

// controller para modificar el itinerario 

const updateItinerary = async (id, newData) => {
  try {
  const itinerary = await Itinerary.findOne({ where: { id: id } });
    

    if (!itinerary) {
      throw new Error("itinerary no encontrado");
    }

    newData.itinerary = JSON.stringify(newData.itinerary);
    await itinerary.update(newData);

    return { message: "itinerary modificado exitosamente" };
  } catch (error) {
    
    console.error("Error al modificar el itinerary:", error);
    throw new Error("Hubo un problema al modificar el itinerary");
  }
};




module.exports = { generateItinerary, getItineraryByid, updateItinerary };
