import { describe, expect, it } from 'vitest';

describe('Personal Portfolio - Environment', () => {
  it('should execute the testing environment correctly', () => {
    const projectName = 'personal-portfolio';

    expect(projectName).toBe('personal-portfolio');
  });

  it('should support TypeScript', () => {
    const version: number = 1;

    expect(version).toBeGreaterThan(0);
  });
});
