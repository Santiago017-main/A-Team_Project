import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";
const typeDefs = "type Query{Hello: String}";

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})