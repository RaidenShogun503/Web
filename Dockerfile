FROM node:12-alpine
RUN apk add nodejs
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm run dev", "/app/"]