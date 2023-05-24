# Kerakli React.js imajni olish
FROM node:latest as builder

# Ishlash direktoriyasi joylashtirish
WORKDIR /app

# Package.json faylni kochirish
COPY package*.json ./

# Node modullarini yuklab olish
RUN npm install --force

# Ish haqida ma'lumotni kochirish
COPY . .

# Build qilish
RUN npm run build

# Prodakshn uchun ozgartirishlar
FROM nginx:1.21-alpine

# Nginx konfiguratsiyasini o'zgartirish
COPY --from=builder /app/build /usr/share/nginx/html

# Nginxni boshqarish uchun konfiguratsiyani kochirish
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Nginxni ishga tushirish
EXPOSE 80

# Konteyner ishga tushirilganda nginxni boshlash
CMD ["nginx", "-g", "daemon off;"]