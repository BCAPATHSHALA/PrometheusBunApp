import type { NextFunction, Request, Response } from "express";
import { requestCounter } from "./countMatric";
import { activeRequestsGauge } from "./gaugeMatric";
import { httpRequestDurationMicroseconds } from "./histogramMatric";

export const metricsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = Date.now();

  // Increment active requests gauge
  activeRequestsGauge.inc();

  res.on("finish", function () {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Request took ${endTime - startTime}ms`);

    // Increment request counter
    requestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status_code: res.statusCode,
    });

    // Observe the duration of the request in the histogram
    httpRequestDurationMicroseconds.observe(
      {
        method: req.method,
        route: req.route ? req.route.path : req.path,
        code: res.statusCode,
      },
      duration // Convert duration to milliseconds for the histogram bucket
    );

    // Decrement active requests gauge
    // This is important to ensure that the gauge reflects the current number of active requests
    activeRequestsGauge.dec();
  });
  next();
};
