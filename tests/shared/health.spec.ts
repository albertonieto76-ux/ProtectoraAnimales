import { describe, it, expect } from 'vitest';
import { getHealth } from '#shared/health.js';

describe('Health Check Utility', () => {
  it('should return UP status and a timestamp', () => {
    const health = getHealth();
    expect(health).toBeDefined();
    expect(health.status).toBe('UP');
    expect(health.timestamp).toBeDefined();
  });

  it('should return a valid ISO 8601 timestamp', () => {
    const health = getHealth();
    expect(new Date(health.timestamp).toString()).not.toBe('Invalid Date');
    expect(health.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });
});
