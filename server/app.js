const app = require("./index");

app.listen(process.env.PORT || 3002, (err) =>
  err ? console.log(err) : console.log("Server Spinning")
);
