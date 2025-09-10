export default function logMethod(req, res, next) {
    console.log(`url : ${req.url}  and method : ${req.method}`);
    next();
}