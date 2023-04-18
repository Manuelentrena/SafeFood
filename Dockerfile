FROM node:16-alpine3.16 as deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:16-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
#RUN npm install --global serve

FROM nginx:alpine as runner
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /var/www/app/
#ENV NODE_ENV production
EXPOSE 80

# Start the app
#CMD [ "serve", "-s", "build" ]
CMD [ "nginx", "-g", "daemon off;" ]


