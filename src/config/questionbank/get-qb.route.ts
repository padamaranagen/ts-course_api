import {
    Request,
    Response
} from 'express';
import { questionbank } from '../questionbank/qb.json'
export function getQuestionbank(req: Request, res: Response) {
    setTimeout(() => {

        res.status(200).json({
            payload: Object.values(questionbank)
        });

    }, 200);
}