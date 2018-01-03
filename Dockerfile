FROM node:alpine
COPY index.js .
EXPOSE 8000

CMD ["node", "index.js"]
