const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Tool definitions
const tools = [
  {
    name: 'search',
    description: 'Search for information on a topic',
    endpoint: '/tools/search',
    method: 'POST',
    parameters: {
      query: { type: 'string', description: 'Search query', required: true }
    }
  },
  {
    name: 'calculate',
    description: 'Perform basic math calculations',
    endpoint: '/tools/calculate',
    method: 'POST',
    parameters: {
      expression: { type: 'string', description: 'Math expression (e.g. "2 + 2")', required: true }
    }
  }
];

// List available tools
app.get('/tools', (req, res) => {
  res.json({ tools });
});

// Search tool (mock)
app.post('/tools/search', (req, res) => {
  const { query } = req.body;

  if (!query || !query.trim()) {
    return res.status(400).json({ error: 'Query is required' });
  }

  // Mock search results
  const results = [
    {
      title: `Result 1 for "${query}"`,
      snippet: `This is a relevant result about ${query}. It contains useful information that an AI agent can use.`,
      url: `https://example.com/result-1?q=${encodeURIComponent(query)}`
    },
    {
      title: `Result 2 for "${query}"`,
      snippet: `Another result about ${query} with additional context and details.`,
      url: `https://example.com/result-2?q=${encodeURIComponent(query)}`
    },
    {
      title: `Result 3 for "${query}"`,
      snippet: `A third resource about ${query} providing a different perspective.`,
      url: `https://example.com/result-3?q=${encodeURIComponent(query)}`
    }
  ];

  res.json({ query, results });
});

// Calculate tool
app.post('/tools/calculate', (req, res) => {
  const { expression } = req.body;

  if (!expression || !expression.trim()) {
    return res.status(400).json({ error: 'Expression is required' });
  }

  try {
    // Only allow safe math characters
    const sanitized = expression.replace(/[^0-9+\-*/().%\s]/g, '');
    if (sanitized !== expression.trim()) {
      return res.status(400).json({ error: 'Invalid characters in expression' });
    }

    // Evaluate the math expression
    const result = Function('"use strict"; return (' + sanitized + ')')();

    if (typeof result !== 'number' || !isFinite(result)) {
      return res.status(400).json({ error: 'Invalid expression' });
    }

    res.json({ expression, result });
  } catch (err) {
    res.status(400).json({ error: 'Failed to evaluate expression' });
  }
});

app.listen(PORT, () => {
  console.log(`Tool server running on port ${PORT}`);
});
