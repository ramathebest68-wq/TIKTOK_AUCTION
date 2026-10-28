FROM node:22-slim

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY . .

ENV PORT=8000
ENV DATA_DIR=/app/data
EXPOSE 8000

CMD ["node", "server.mjs"]
