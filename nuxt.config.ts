import * as dotenv from 'dotenv';
//@ts-ignore
import pem from 'https-pem';

dotenv.config({path: 'env/' + (process.env.ENV ? process.env.ENV : 'dev') + '.env'});

let publicRuntimeConfig: { [key: string]: string | undefined } = {};
for (let key of Object.keys(process.env).filter(value => value.includes('NUXT_PUBLIC_'))) {
    publicRuntimeConfig[key] = process.env[key];
}
export default {
    server: {
        https: process.env.ENV === 'local' ? pem : undefined,
    },
    publicRuntimeConfig: publicRuntimeConfig,
    privateRuntimeConfig: {},
    serverMiddleware: ['~/server-middleware/index.ts'],
    buildModules: ['@nuxt/typescript-build'],
};
