import { validDate } from './validators';

export function validPartRequestBody(req, res, next) {
    if(!req.body.name) {
        return;
    }

    if(!req.body.date ||
       !validDate(req.body.date)) {
        return;
    }

    if(req.body.amount < 0) {
        return;
    }

    next();
}