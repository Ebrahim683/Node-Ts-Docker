docker-compose.yaml:
    1. set db service and compose build
    2. set api service and compose build


prisma migrate:
    docker exec -it api npx prisma migrate dev --name init

for push:
    1. docker-compose up --build -d
    2. docker login
    3. docker tag ebrahim683/node-with-ts-api:latest ebrahim683/node-with-ts-api:v1.0 // tagging
    4. push

for pull: (also need to have the same compose.yaml file)
    1. docker pull repository
    2. docker compose up -d
    3. docker start api