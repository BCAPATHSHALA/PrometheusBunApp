# Prometheus and Grafana for App Monitoring

## Development Commands

### Install Dependencies

```bash
bun install
```

### Run in Development Mode

```bash
bun run dev
```

## Production Commands

### Build for Production

```bash
bun run build
```

### Start Production App

```bash
bun run start
```

## Docker Deployment with Prometheus only

### Prerequisites

- Docker installed

### Deployment Steps

- `Step 1`: Develop your Bun application (_Implement your application logic and Prometheus metrics endpoints_)
- `Step 2`: Create _`.dockerignore`_ file
- `Step 3`: Create _`Dockerfile`_ file
- `Step 4`: Create _`docker-compose.yml`_ file
- `Step 5`: Create _`prometheus.yml`_ file
- `Step 6`: Run the application using `docker compose up`
- `Step 7`: Access Prometheus at `http://localhost:9090`
- `Step 8`: Access your application at `http://localhost:3000`

## Docker Deployment with Grafana and Prometheus

- `Step 1`: Installing grafana in docker compose `Update docker-compose`

```yml
version: "3.8"

services:
  my-bun-app:
    build: ./
    ports:
      - "3000:3000"
    networks:
      - monitoring

  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./:/etc/prometheus
    ports:
      - "9090:9090"
    networks:
      - monitoring

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    networks:
      - monitoring
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin

networks:
  monitoring:
```

- `Step 2`: Access Grafana at `http://localhost:3001`
- `Step 3`: Adding Prometheus as a source in Grafana `Update grafana`
- `Step 4`: Grafana provides you with a way to set alerts on metrics and notifications

For more information, please refer to the [Grafana documentation](https://grafana.com/docs/grafana/latest/) and [Prometheus documentation](https://prometheus.io/docs/prometheus/latest/).