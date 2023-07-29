const axios = require('axios');
const {Itinerary} = require('../database');


const apiKey = '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'

const generateItinerary = async (req, res) => {
    const { continent, country, city, days } = req.body;
  
    try {
      // Construye la pregunta o solicitud al modelo de GPT-3.5 con los datos recibidos.
      const prompt = `¿Puedes ayudarme a crear un itinerario de viaje para ${days} días en ${city}, ${country} en el continente ${continent}?`;
  
      // Realiza la solicitud a la API de OpenAI GPT-3.5.
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt,
          max_tokens: 500, // Ajusta este valor según tus necesidades.
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
  
      // Extrae la respuesta generada por el modelo.
      const itinerary = response.data.choices[0].text;
  
      // Guarda el itinerario en la base de datos.
      await Itinerary.create({ itinerary });
  
      // Responde con el itinerario al frontend.
      res.json({ itinerary });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        console.error('Error en la respuesta de la API:', error.response.data.error);
        res.status(500).json({ error: error.response.data.error });
      } else {
        console.error('Error al generar el itinerario:', error.message);
        res.status(500).json({ error: 'Hubo un problema al generar el itinerario.' });
      }}
  };
  
  module.exports = { generateItinerary };
  




 
  
