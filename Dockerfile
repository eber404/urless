FROM nodejs/alpine AS build

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm ci
RUN pnpm build

COPY . .

EXPOSE 4321

CMD ["pnpm", "start"]