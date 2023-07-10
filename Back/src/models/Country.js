import { Schema, model} from "mongoose";

const paisSchema = new Schema ({
      codigo: {
         type: String,
         required: true,
         minLength: 2,
      },
      nombre: {
          type: String,
          required: true,
          trim: true,
      },
      calificacion: {
          type: Number,
          default: 0.00,
      }
   },
   {
      timestamps: true,
      versionKey: false,
   }
);

export default model('Country', paisSchema);
