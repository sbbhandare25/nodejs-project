import resolvers from "@xgraphql/resolvers";
import typeDefs from "@xgraphql/schema";
import { ApolloServer } from "apollo-server-express";
import app from "./app";
import config from "./config";

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await server.start();
  server.applyMiddleware({ app });
})();

app.listen(config.port, () => {
  console.log(`Server is listening at http://localhost:${config.port}`);
});
