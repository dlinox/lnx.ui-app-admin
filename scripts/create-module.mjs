import fs from "fs";
import path from "path";

function createModule(moduleName) {
  const modulePath = path.resolve(
    process.cwd(),
    "src",
    "app",
    "modules",
    moduleName
  );

  // Verifica si el módulo ya existe
  if (fs.existsSync(modulePath)) {
    console.log(`El módulo "${moduleName}" ya existe.`);
    return;
  }

  try {
    fs.mkdirSync(path.normalize(modulePath), { recursive: true });
    fs.mkdirSync(path.join(modulePath, "components"), { recursive: true });
    fs.mkdirSync(path.join(modulePath, "store"), { recursive: true });
    fs.mkdirSync(path.join(modulePath, "views"), { recursive: true });
    fs.mkdirSync(path.join(modulePath, "routes"), { recursive: true });
  } catch (error) {
    console.error("Error al crear las carpetas:", error);
    return;
  }
}

// Obtener el nombre del módulo desde la línea de comandos
const moduleName = process.argv[2];

if (moduleName) {
  createModule(moduleName);
} else {
  console.log("Por favor, proporciona el nombre del módulo.");
}
