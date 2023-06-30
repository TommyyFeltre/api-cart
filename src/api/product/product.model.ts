import mongoose from "mongoose";
import { Product as iProduct } from "./product.entity";
import { transform } from "lodash";

export const productSchema = new mongoose.Schema<iProduct>({
  name: String,
  description: String,
  netPrice: Number,
  discount: Number,
  weight: Number,
});
//codice che serve per modificare l'oggetto prima che venga trasformato in JSON, quindi non mi
//ritrovo l'_id e l'id ma solamente l'_id perchè tramite la funzione transform lo elimino
productSchema.set("toJSON", {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id;
    return ret;
  },
});

export const Product = mongoose.model<iProduct>("Product", productSchema);
