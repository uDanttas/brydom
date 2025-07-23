// lib/models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  cpf: { type: String, required: true, unique: true },
  senhaAnimal: { type: String, required: true },
  saldo: { type: Number, default: 0 },
  bots: { type: Number, default: 0 },
  lucroHoje: { type: Number, default: 0 },
  historico: [{ 
    data: Date, 
    tipo: String, 
    valor: Number, 
    descricao: String 
  }],
  tipo: { type: String, enum: ["cliente", "mestre"], default: "cliente" },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
