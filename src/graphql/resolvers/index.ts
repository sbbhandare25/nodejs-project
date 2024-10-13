import addUser from "./addUser";
import helloWorld from "./helloWorld";

const resolvers = {
  Query: {
    helloWorld,
  },
  Mutation: {
    addUser,
  },
};

export default resolvers;
