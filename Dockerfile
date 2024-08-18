FROM node:latest as build

WORKDIR /app

RUN npm cache clean --force

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx

COPY --from=build /app/dist/dockerize-angular-app/browser /usr/share/nginx/html

EXPOSE 80