# Agent Tool Server

A simple REST API tool server for AI agents, ready to deploy.

## Setup

```bash
npm install
node server.js
```

Open [http://localhost:3000](http://localhost:3000) to test the tools in the browser.

## API Endpoints

- `GET /tools` - List available tools
- `POST /tools/search` - Search for information (`{ "query": "..." }`)
- `POST /tools/calculate` - Calculate math expressions (`{ "expression": "..." }`)

## Deploy with Ink

Connect the [Ink MCP server](https://docs.ml.ink/quick-start) to your AI agent and prompt:

> Deploy this app with Ink.

## Tutorial

Full tutorial: [docs.ml.ink/examples/ai/agent-tool-server](https://docs.ml.ink/examples/ai/agent-tool-server)

## About Ink

[Ink](https://ml.ink) is a deployment platform built for AI agents.

- **Website**: [ml.ink](https://ml.ink)
- **Documentation**: [docs.ml.ink](https://docs.ml.ink)
- **Quick Start**: [docs.ml.ink/quick-start](https://docs.ml.ink/quick-start)
- **Examples**: [docs.ml.ink/examples](https://docs.ml.ink/examples)
