// lib/auth.js
import { connectDB } from "./db";
import User from "./models/User";

export async function autenticarUsuario(cpf, senhaAnimal) {
  await connectDB();
  const user = await User.findOne({ cpf, senhaAnimal });
  return user || null;
}
