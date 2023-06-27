const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const dotEnv = require("dotenv");
const specs = require("./services/swagger");
const swaggerUi = require("swagger-ui-express");
dotEnv.config();

const usersRouter = require("./routes/usersRoutes");
const drinksRouter = require("./routes/drinksRoutes");
const categoriesRouter = require("./routes/categoriesRoutes");
const ingredientsRouter = require("./routes/ingredientsRoutes");
const glassesRouter = require("./routes/glassesRoutes");
const relate = require("./models/relationship");

const app = express();
relate();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use("/user", usersRouter);
app.use("/drink", drinksRouter);
app.use("/category", categoriesRouter);
app.use("/ingredient", ingredientsRouter);
app.use("/glass", glassesRouter);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
