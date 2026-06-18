export function GET() {
  return new Response('This off-topic legacy article has been removed.', {
    status: 410,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'x-robots-tag': 'noindex',
    },
  });
}
