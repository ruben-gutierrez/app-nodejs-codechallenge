import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "kafka",
    "password": "123",
    "database": "testkafka",
    "entities": ["src/**/*.entity.ts"],
    "migrations":["src/migration/*{.ts,.js}"]
})
