const asyncWrapper = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
      // So every time you wrap me around any controller, I will execute the controller in my try block.
    } catch (err) {
      next(err);
      // Errors will be caught right here and the next middleware (errorHandler) will be returning a response to the API for them
    }
  };
};

module.exports = asyncWrapper;
