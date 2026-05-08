import * as esbuild from 'esbuild';
import { mkdirSync } from 'fs';

// Ensure dist/ exists
mkdirSync('dist', { recursive: true });

const isWatch = process.argv.includes('--watch');

const ctx = await esbuild.context({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  minify: !isWatch,
  sourcemap: isWatch ? 'inline' : false,
  target: ['chrome90', 'firefox90', 'safari15', 'edge90'],
  outfile: 'dist/bundle.js',
  define: {
    'process.env.NODE_ENV': isWatch ? '"development"' : '"production"',
  },
  logLevel: 'info',
});

if (isWatch) {
  await ctx.watch();
  console.log('Watching for changes…');
} else {
  await ctx.rebuild();
  await ctx.dispose();
  console.log('✓ Build complete → dist/bundle.js');
}
