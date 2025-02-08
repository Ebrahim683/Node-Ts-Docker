docker-compose.yaml:
    1. set db service and compose build
    2. set api service and compose build


prisma migrate:
    docker exec -it api npx prisma migrate dev --name init