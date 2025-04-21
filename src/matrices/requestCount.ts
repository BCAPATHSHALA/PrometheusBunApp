import type { NextFunction, Request, Response } from "express";
import client from "prom-client";

// Create a counter metric (Used to count the number of requests)
export const requestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code"],
});

// export const requestCountMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const startTime = Date.now();

//   // Log the request method and URL when the response is finished
//   res.on("finish", () => {
//     const endTime = Date.now();
//     console.log(`Request took ${endTime - startTime}ms`);

//     // Increment request counter with labels
//     // The labels are method, route, and status_code
//     requestCounter.inc({
//       method: req.method,
//       route: req.route ? req.route.path : req.path,
//       status_code: res.statusCode,
//     });
//   });

//   next();
// };
