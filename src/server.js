import { createServer } from 'node:http';
import { createYoga, createSchema } from 'graphql-yoga';
import { addMocksToSchema } from '@graphql-tools/mock';
 
const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type User {
        userName: String
        email: String
    }
    type Event {
        title: String
        location: String
    }
    type Query {
        users: User
        events: Event
    }
  `,
});

const schemaWithMocks = addMocksToSchema({ schema });

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema: schemaWithMocks });

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(4000, () => {
 console.info('Server is running on http://localhost:4000/graphql')
});
