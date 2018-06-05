import http from 'http';
import express from 'express';

let app = express();
app.server = http.createServer(app);

app.get('/api/hello', (req, res) => {
  //res.send({ express: visData });
  res.send("hello cody");
});

app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});



export default app;
