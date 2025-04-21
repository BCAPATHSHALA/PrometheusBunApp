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

## Docker Deployment with Grafana and Prometheus (Pending)
