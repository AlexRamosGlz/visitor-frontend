FROM node:18-alpine AS build

RUN echo "Building..."

WORKDIR /app/

COPY . .

RUN npm i && npm run build

COPY ./build .



FROM build AS serve

EXPOSE 3000

RUN npm i -g serve

CMD ["serve", "-p", "3000", "./build"]