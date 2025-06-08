// Script para agregar un campo "stock" aleatorio a cada producto (ESM)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "productos.json");
const productos = JSON.parse(fs.readFileSync(filePath, "utf8"));

const productosConStock = productos.map((producto) => ({
  ...producto,
  stock: Math.floor(Math.random() * 30) + 1,
}));

fs.writeFileSync(filePath, JSON.stringify(productosConStock, null, 2), "utf8");

console.log("¡Stock agregado a todos los productos!");
