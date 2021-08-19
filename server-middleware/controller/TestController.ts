import {Request, Response, Router} from 'express';
import Controller from './controller.abstract';

export default class TestController extends Controller {
    path: string = '/';
    router: Router = Router();

    constructor() {
        super();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/test', this.getTest);
        this.router.get('/test_render', this.getVueRenderTest);
        this.router.get('/asyncTest', super.handleRejections(this.getAsyncTest));
    }

    private getTest = (_: Request, res: Response) => {
        res.send('OK');
    };

    private getVueRenderTest = (_: Request, _2: Response, next: Function) => {
        console.log(process.env.NUXT_PUBLIC_TEST);
        next();
    };

    private getAsyncTest = async (_: Request, res: Response) => {
        const asyncTest = new Promise((resolve) => {
            resolve('hello world');
        });
        res.send(await asyncTest);
    };
}
