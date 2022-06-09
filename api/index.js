function handler(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ "data": `Hello world! current Time = ${Date.now()}` });
}

module.exports = handler