export default function cors(req, res, next) {
 
  res.header("Access-Control-Allow-Origin", "http://localhost:5174");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");


  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
}

