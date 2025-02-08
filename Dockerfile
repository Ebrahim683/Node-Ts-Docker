FROM node:20
WORKDIR /app
COPY package*.json ./
RUN yarn install || npm install
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
EXPOSE 5050
CMD [ "yarn", "dev" ]