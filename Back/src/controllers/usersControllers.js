const { User } = require("../database.js");
const transporter = require("../nodemailer.js")

//  Controller Nuevo Usuario google

// Controller Nuevo Usuario
const createUser = async (datos) => {
  const { uid, profile, name, lastName, email } = datos;
  //console.log(datos);
  if (!uid || !profile || !email) {
    return { message: "Datos Basicos incompletos" };
  }

  const newUser = await User.create({
    uid,
    profile,
    name,
    lastName,
    email,
    password: "",
  });


  // Configuracion de nodemailer para el envio de correo de bienvenida cuando el usuario se loguea
  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Correo de bienvenida</title>
  </head>
  <header style="text-align: center; background-color:#ffffff;">
      <h1 style="color:rgb(249, 250, 249); background-color:#2D572C; height: 80px; border: 2px solid black; border-radius:3px; font-family: cursive; font-size: 50px; padding-top: 10px;" > Wanderlust </h1>
  </header>
  <body>
    <div style="text-align: center; background-color:#ffffff; margin: 70px; border-radius: 40px;">
      <h2 style="text-align: center; color: black; padding-top: 20px; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 15px;">¡Hola viajero/a! Te damos la más cordial bienvenida a nuestro sitio web de viajes,<br>
      donde podrás descubrir emocionantes destinos<br>
      y disfrutar de experiencias inolvidables.<br><br><br>
      ¡Empieza a planificar tus aventuras ahora y déjate llevar por la magia de viajar! 🌍✈️🏨
      </h2>
    </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: 'wanderlusthenry8@gmail.com', 
    to: datos.email, // Utiliza el correo electrónico del usuario que se acaba de registrar
    subject: 'Bienvenido/a a Wanderlust',
    html: htmlContent,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log('Error al enviar el correo electrónico:', error);
    throw new Error('Hubo un problema al enviar el correo de bienvenida');
  }
  return newUser;
};

// Controller llamado a todos los Usuarios
const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

// Controller borrado logico
const deleteUser = async (uid) => {
  try {
    const user = await User.findByPk(uid);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Realiza el borrado lógico estableciendo la columna "locked" en false.
    await user.update({ locked: false });

    return { message: "Usuario eliminado correctamente (borrado lógico)." };
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw new Error("Hubo un problema al eliminar el usuario.");
  }
};

// Controller llamdo a usuario por Id
const getUserByUid = async (uid) => {
  const user = await User.findOne({ where: { uid: uid } });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};


// Controller para modificar un usuario existente
const updateUser = async (uid, newData) => {
  try {
    const user = await User.findOne({ where: { uid: uid } });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Actualizar los atributos del usuario con los datos proporcionados en newData
    // Por ejemplo, si newData es un objeto con los atributos que se desean modificar:
    // { name: "Nuevo nombre", lastName: "Nuevo apellido", email: "nuevo@ejemplo.com" }
    // Esto actualizará únicamente los atributos proporcionados y dejará los demás sin cambios.
    await user.update(newData);

    return { message: "Usuario modificado exitosamente" };
  } catch (error) {
    // Si ocurre algún error durante la modificación, puedes manejarlo aquí.
    console.error("Error al modificar el usuario:", error);
    throw new Error("Hubo un problema al modificar el usuario");
  }
};


module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  getUserByUid,
  updateUser
};
