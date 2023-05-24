FROM node:latest

# Ilovamiz uchun ishqa muvaffaqiyatli o'rnatilgan konteyner uchun ishga tushirish katalogini yaratamiz
WORKDIR /app

# package.json va yarn.lock fayllarni kopiya qilamiz
COPY package.json yarn.lock ./

# Ilovamiz uchun kerakli qo'shimcha paketlarni o'rnatamiz
RUN yarn install

# Barcha ilova fayllarini saqlash katalogiga nusxalab olish
COPY . .

# Ilovamizni qurish va uni to'g'ridan-to'g'ri ishga tushirish
RUN yarn build

# Ishga tushirish uchun serve paketini o'rnatamiz
RUN yarn add serve

# 80-portni ochish uchun to'g'ridan-to'g'ri sahifa nomini kiritamiz
ENV PORT=3000

# 80-portni tinglash
EXPOSE 3000

# Ishga tushirish komandasi
CMD ["yarn", "serve"]