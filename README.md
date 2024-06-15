# Slot Machine Game

![Slot Machine Game](https://your-image-link-here) <!-- Puedes añadir un enlace a una imagen del juego si tienes una -->

## Descripción

Este es un simple juego de máquina tragamonedas desarrollado con HTML, CSS, JavaScript y Node.js. El proyecto simula el comportamiento de una máquina tragamonedas real con animaciones y efectos visuales.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
/slot-machine-game
│
├── /node_modules
├── /public
│   ├── index.html
│   ├── style.css
│   └── script.js
├── /src
│   ├── gameLogic.js
│   └── server.js
├── package-lock.json
├── package.json
└── README.md
```

### Descripción de Archivos

- **public/index.html**: Contiene la estructura HTML de la página web.
- **public/style.css**: Contiene los estilos CSS para la página web.
- **public/script.js**: Contiene la lógica del cliente en JavaScript para el juego.
- **src/gameLogic.js**: Contiene la lógica principal del juego (giro de carretes, cálculo de ganancias, etc.).
- **src/server.js**: Configura el servidor Node.js y maneja las solicitudes del cliente.
- **package.json**: Archivo de configuración para las dependencias del proyecto.

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:

   \`\`\`sh
   git clone https://github.com/tu-usuario/slot-machine-game.git
   cd slot-machine-game
   \`\`\`

2. Instala las dependencias:

   \`\`\`sh
   npm install
   \`\`\`

3. Inicia el servidor:

   \`\`\`sh
   npm start
   \`\`\`

4. Abre tu navegador web y dirígete a `http://localhost:3000` para jugar al juego.

## Funciones del Juego

### Funciones en `gameLogic.js`

- **`spin()`**: Gira los carretes y devuelve los símbolos seleccionados.
- **`transpose(matrix)`**: Transpone la matriz para obtener las filas de los carretes.
- **`getWinnings(rows, bet, lines)`**: Calcula las ganancias basadas en las líneas ganadoras.

### Servidor en `server.js`

- Maneja la solicitud `POST` en `/spin` para girar los carretes y devolver los resultados.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactar al autor del proyecto en [fauriziogonzalez@gmail.com](mailto:fauriziogonzalez@gmail.com).

---

¡Gracias por usar Slot Machine Game! Diviértete jugando y buena suerte.
