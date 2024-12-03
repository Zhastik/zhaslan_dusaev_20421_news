# Используем официальный Node.js образ как базовый
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package.json ./
COPY package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы в контейнер
COPY . .

# Собираем приложение Next.js
RUN npm run build

# Экспонируем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
