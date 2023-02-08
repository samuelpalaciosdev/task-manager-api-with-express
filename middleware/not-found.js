const notFound = (req, res) =>
  res.status(404).json({ status: 'failed', msg: `Route doesn't exist` });

module.exports = notFound;
