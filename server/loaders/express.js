import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./../config/index.js";
import routes from "./../api/index.js";


export default (app) => {
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
      methods: ["GET", "POST", "OPTIONS"],
    })
  );

  // application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  // Transforms the raw string of req.body into JSON
  app.use(express.json());
  app.use(cookieParser());

  // Load API routes
  
  app.use(routes());

  // Swagger UI
  // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

  // Catch 404 and forward to the error handler
  // app.use((req, res, next) => {
  //   const err = new Error("Not Found");
  //   err.status = 404;
  //   next(err);
  // });
};
