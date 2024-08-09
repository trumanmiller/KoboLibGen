const app = require("express")();
const path = require("path");

const PORT = 3000;

const downloadFlow = require("/flows/download");
const searchFlow = require("/flows/search");

app.use("/download", downloadFlow);
app.use("/search", searchFlow);

app.get("/", (req, res, err) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use((err, req, res, next) => {
  console.log(err);
  const defaultError = {
    log: "Global error handler caught an unknown error.",
    status: 500,
    message: { err: "An error has occurred" },
  };

  console.log(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});

app.use((req, res, next) => {
  res.status(404);

  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else {
    res.json({ error: "404 not found" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("listening on port: " + PORT);
});
