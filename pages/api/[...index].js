module.exports = function (req, res) {
  res.json({"data": `Hello world! Time = ${Date.now()}`});
};