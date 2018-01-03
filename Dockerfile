FROM node:alpine
COPY index.js .
EXPOSE 8000
ENV FLY_LOCAL_ENDPOINT 0.0.0.0:8000

ADD https://github.com/superfly/wormhole/releases/download/v0.5.36/wormhole_linux_amd64 /wormhole
RUN chmod +x /wormhole

CMD ["/wormhole", "node", "index.js"]
