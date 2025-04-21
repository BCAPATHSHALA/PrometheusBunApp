import client from "prom-client";

// Create a gauge metric (Used to track the number of active requests)
// This metric is useful for monitoring the number of concurrent requests being handled by the server
export const activeRequestsGauge = new client.Gauge({
  name: "active_requests",
  help: "Number of active requests",
});
