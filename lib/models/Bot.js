// lib/models/Bot.js
import mongoose from "mongoose";

const BotSchema = new mongoose.Schema({
  dono: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ativo: { type: Boolean, default: true },
  criadoEm: { type: Date, default: Date.now },
  saldoOperacional: { type: Number, default: 0 },
  lucroHoje: { type: Number, default: 0 },
  tipo: { type: String, enum: ["cliente", "bhacanna"], default: "cliente" },
});

export default mongoose.models.Bot || mongoose.model("Bot", BotSchema);
