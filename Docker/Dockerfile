FROM node:16.9.0 AS build-step

WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.18-alpine
COPY ./Docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /build/dist /frontend/dist