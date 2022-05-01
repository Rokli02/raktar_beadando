export function validProductRequestBody(req, res, next) {
    if(!req.body.name) {
        return;
    }

    if(!req.body.parts || !req.body.requiredProducts) {
        return;
    }

    next();
}