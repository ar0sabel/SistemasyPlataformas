
#Usar la imagen base de Node.js
FROM node:14

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto en el que la app estará escuchando
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]
