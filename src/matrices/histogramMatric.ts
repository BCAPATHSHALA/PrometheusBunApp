import client from "prom-client";

// Create a histogram metric (Used to track the duration of requests in milliseconds)
// This metric is useful for monitoring the performance of the server and identifying slow requests
export const httpRequestDurationMicroseconds = new client.Histogram({
  name: "http_request_duration_ms",
  help: "Duration of HTTP requests in ms",
  labelNames: ["method", "route", "code"],
  buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000], // Define your own buckets here
});
