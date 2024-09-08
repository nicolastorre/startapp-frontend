# startapp-frontend

## CMD

Production build:

$ docker run -it --rm -v ${PWD}:/app -w /app node:22 /bin/bash -c "NODE_ENV=production && npm ci --omit=dev && npm run build"
