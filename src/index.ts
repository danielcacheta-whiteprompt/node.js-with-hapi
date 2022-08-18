import { server } from '@hapi/hapi';

const init = async () => {

    const exampleServer = server({
        port: 3000,
        host: 'localhost'
    });

    await exampleServer.start();
    console.log('Server running on %s', exampleServer.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();