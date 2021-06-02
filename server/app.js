const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => res.send('Hello, World!'))

const port = process.env.PORT || 6001

app.listen(port, () => console.log(`App running on port ${port}`));
