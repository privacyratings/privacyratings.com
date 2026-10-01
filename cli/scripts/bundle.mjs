// Bundles the CLI and its dependencies into one CommonJS file, dist/privacyratings.cjs,
// which is what the standalone binaries run (Node.js single executable applications
// only run CommonJS).
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';

await build({
  entryPoints: [fileURLToPath(new URL('../bin/privacyratings.js', import.meta.url))],
  outfile: fileURLToPath(new URL('../dist/privacyratings.cjs', import.meta.url)),
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node22',
  minify: true,
  legalComments: 'eof',
  // import.meta.url does not exist in CommonJS. Dependencies that call createRequire(import.meta.url)
  // get the bundle's own file URL instead.
  define: { 'import.meta.url': 'importMetaUrl' },
  banner: { js: "const importMetaUrl = require('node:url').pathToFileURL(__filename).href;" },
  plugins: [
    {
      // css-tree's ES module build loads its JSON data with createRequire(import.meta.url), which a
      // bundle cannot follow. Its CommonJS build uses plain require(), which esbuild bundles.
      name: 'prefer-commonjs',
      setup(b) {
        b.onResolve({ filter: /^(css-tree|mdn-data)(\/|$)/ }, (args) => (args.kind === 'require-call' ? undefined : b.resolve(args.path, { kind: 'require-call', resolveDir: args.resolveDir, importer: args.importer })));
      }
    }
  ],
  logLevel: 'warning'
});
console.log('dist/privacyratings.cjs');
