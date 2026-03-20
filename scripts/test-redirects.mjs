#!/usr/bin/env node

/**
 * Test script to verify all redirects are working correctly
 * Run: node scripts/test-redirects.mjs <domain>
 * Example: node scripts/test-redirects.mjs https://webadish.com
 */

import https from 'https';
import http from 'http';

const redirects = [
  { from: '/services/maintenance', to: '/maintenance' },
  { from: '/services/security', to: '/security' },
  { from: '/services/hacked-site-recovery', to: '/hacked-site-recovery' },
  { from: '/services/site-retainer', to: '/retainer' },
  { from: '/services/web-design', to: '/web-design' },
  { from: '/our-pricing', to: '/pricing' },
  { from: '/portfolio', to: '/case-studies' },
  { from: '/about', to: '/' },
  { from: '/about-us', to: '/' },
  { from: '/contact-us', to: '/contact' },
  { from: '/privacy', to: '/privacy-policy' },
  { from: '/tos', to: '/terms' },
  { from: '/refund', to: '/refund-policy' },
  { from: '/support', to: '/contact' },
  { from: '/help', to: '/contact' },
  { from: '/faq', to: '/' },
  { from: '/services', to: '/' },
  { from: '/solutions', to: '/' },
];

const domain = process.argv[2] || 'http://localhost:3000';
const protocol = domain.startsWith('https') ? https : http;

console.log(`\n🔍 Testing redirects on ${domain}\n`);
console.log('─'.repeat(70));

let passed = 0;
let failed = 0;

async function testRedirect(from, expectedTo) {
  return new Promise((resolve) => {
    const url = new URL(from, domain);

    const options = {
      method: 'HEAD',
      hostname: url.hostname,
      port: url.port || (domain.includes('https') ? 443 : 80),
      path: url.pathname,
      redirect: 'manual',
      headers: {
        'User-Agent': 'SEO-Redirect-Tester/1.0',
      },
    };

    if (domain.includes('https')) {
      options.rejectUnauthorized = false;
    }

    const req = protocol.request(url, options, (res) => {
      const statusCode = res.statusCode;
      const location = res.headers.location;

      let status = '❌';
      let message = '';

      if (statusCode === 301 || statusCode === 302) {
        // Check if redirect location matches expected
        const redirectPath = location ? new URL(location, domain).pathname : null;
        if (redirectPath === expectedTo) {
          status = '✅';
          message = `${statusCode} → ${location}`;
          passed++;
        } else {
          message = `${statusCode} → ${location || 'NO LOCATION'} (expected ${expectedTo})`;
          failed++;
        }
      } else if (statusCode === 200) {
        message = `${statusCode} (expected 301/302 redirect)`;
        failed++;
        status = '⚠️ ';
      } else {
        message = `${statusCode} ${res.statusMessage}`;
        failed++;
      }

      console.log(`${status} ${from.padEnd(35)} ${message}`);
      resolve();
    });

    req.on('error', (err) => {
      console.log(`❌ ${from.padEnd(35)} Error: ${err.message}`);
      failed++;
      resolve();
    });

    req.end();
  });
}

async function runTests() {
  for (const redirect of redirects) {
    await testRedirect(redirect.from, redirect.to);
  }

  console.log('─'.repeat(70));
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);

  if (failed === 0) {
    console.log('✨ All redirects working correctly!\n');
    process.exit(0);
  } else {
    console.log('⚠️  Some redirects failed. See details above.\n');
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
