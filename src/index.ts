// import 'reflect-metadata';
// import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
// import { User } from './entity/User';

/* createConnection()
  .then(async connection => {
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch(error => console.log(error)); */

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers
});

const app = express();

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
