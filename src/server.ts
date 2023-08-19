import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  console.log("> Database started");
  app.listen(3000, () => console.log("> API started"));
});
