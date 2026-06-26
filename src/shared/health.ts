export function getHealth(): { status: string; timestamp: string } {
  return {
    status: 'UP',
    timestamp: new Date().toISOString()
  };
}
