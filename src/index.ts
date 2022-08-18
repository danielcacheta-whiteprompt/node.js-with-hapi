import { server } from '@hapi/hapi';
import SignUp from './SignUp';

const init = async () => {

  const exampleServer = server({
    port: 3000,
    host: 'localhost'
  });

  exampleServer.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    }
  });

  exampleServer.route({
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const name = request.params.name ?? 'stranger';
      return `Hello ${name}!`;
    }
  });

  exampleServer.route({
    method: 'GET',
    path: '/hi',
    handler: (request, h) => {
      const name = request.query.name ?? 'stranger';
      return `Hi ${name}!`;
    }
  });

  exampleServer.route({
    method: 'POST',
    path: '/signup',
    handler: (request, h) => {
      const payload = request.payload as SignUp;
      return `Welcome ${payload.username}!`;
    }
  });

  await exampleServer.start();
  console.log('Server running on %s', exampleServer.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();