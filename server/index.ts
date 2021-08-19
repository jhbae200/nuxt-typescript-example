import * as dotenv from 'dotenv';
// @ts-ignore
import https from 'https';
// @ts-ignore
import {build, loadNuxt} from 'nuxt';
import {resolve} from 'path';
import TestController from './controller/TestController';
import ExpressApp from './ExpressApp';

dotenv.config({path: resolve(__dirname, '../env/' + (process.env.ENV ? process.env.ENV : 'dev') + '.env')});

const app = new ExpressApp(new TestController()).app;
const isDev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT || '3000', 10);

async function start() {
    // We get Nuxt instance
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start');

    // Render every route with Nuxt.js
    app.use(nuxt.render);

    // Build only in dev mode with hot-reloading
    if (isDev) {
        build(nuxt);
    }
    // Listen the server
    await app.listen(port);
    console.log(`Server listening on \`http://localhost:${port}\`.`);

    if (process.env.ENV === 'local') {
        // @ts-ignore
        const pem = require('https-pem');
        const httpsPort: number = parseInt(process.env.HTTPS_PORT || '3443', 10);
        https.createServer(pem, app).listen(httpsPort, () => {
            console.log(`Server listening on \`https://localhost:${httpsPort}\`.`);
        });
    }
}

start();
