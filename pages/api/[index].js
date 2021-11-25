export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ "data": `Hello world! Time = ${Date.now()}` });
}