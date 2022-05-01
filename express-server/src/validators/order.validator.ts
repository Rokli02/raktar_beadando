import { validDate, validEmail, validPhoneNumber } from './validators';

export function validOrderRequestBody(req, res, next) {
    if(!req.body.customerName){
        return;
    }

    if(!req.body.customerEmail ||
       !validEmail(req.body.customerEmail)){
        return;
    }
    
    if(!req.body.customerPhone ||
       !validPhoneNumber(req.body.customerPhone)){
        return;
    }
    
    if(!req.body.orderDate ||
       !validDate(req.body.orderDate)){
        return;
    }
    
    if(!req.body.product){
        return;
    }
    
    if(req.body.amount !== undefined && req.body.amount < 1){
        return;
    }

    next();
}

