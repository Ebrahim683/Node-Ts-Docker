FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
RUN npm run build
EXPOSE 5050
CMD ["sh", "-c", "npx prisma migrate dev --name init && npm start"]