import { connect } from 'mongoose';

(async () => {
   try {
      const db = await connect("mongodb://localhost/wanderlust");
      console.log("Db Connected to", db.connection.name);
   } catch (error) {
      console.log("Error de conexion a la Bd");
   }
})();

//comentario