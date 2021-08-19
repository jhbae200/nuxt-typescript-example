import TestController from './controller/TestController';
import ExpressApp from './ExpressApp';
import * as dotenv from 'dotenv';

dotenv.config({path: 'env/' + (process.env.ENV ? process.env.ENV : 'dev') + '.env'})

const app = new ExpressApp(new TestController()).app;

export default app;
