FROM node:16 as build
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY ./ /app/
RUN npm run build

FROM nginx:1.15
COPY --from=build /app/build/ /usr/share/nginx/html
# COPY --from=build /nginx.conf /etc/nginx/conf.d/default.conf