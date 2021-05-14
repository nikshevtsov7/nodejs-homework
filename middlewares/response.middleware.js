const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
   console.log('In responseMiddleware');
  if(req.data){
    res.status(200);
    res.json(req.data);
  }
  if(req.err){
    res.status(404);
    res.json({
      error: true,
      message: req.err
    })
  }
    next();
}

exports.responseMiddleware = responseMiddleware;
