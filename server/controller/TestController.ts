import {Request, Response, Router} from 'express';
import Controller from './controller.abstract';

export default class TestController extends Controller {
    path: string = '/test';
    router: Router = Router();

    constructor() {
        super();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getTest);
        this.router.get('/asyncTest', super.handleRejections(this.getAsyncTest));
    }

    private getTest = (_: Request, res: Response) => {
        res.send('OK');
    };


    private getAsyncTest = async (_: Request, res: Response) => {
        const asyncTest = new Promise((resolve, reject) => {
            resolve('hello world');
        });
        res.send(await asyncTest);
    };
}
