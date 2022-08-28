import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "${DB_USER_ID}",
  password: "${DB_USER_PASSWORD}",
  database: "${DB_USER_ID}",
  synchronize: true,
  logging: false,
  entities: ["src/entities/**/*.ts"],
  migrations: [],
  subscribers: [],
});
