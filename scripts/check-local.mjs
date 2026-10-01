// Falha se o site estiver apontando para uma cópia local do pacote
// (file:, link: ou git+file:) no package.json ou no package-lock.json. Rode na raiz do site:
//   node node_modules/@henriquesebastiao/branding/scripts/check-local.mjs
// Os sites chamam este script no pre-commit e antes do build.
import { existsSync, readFileSync } from "node:fs";

const name = "@henriquesebastiao/branding";
const local = /^(file:|link:|git\+file:|\.{0,2}\/)/;
const problems = [];

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
for (const field of ["dependencies", "devDependencies"]) {
  const spec = pkg[field]?.[name];
  if (spec && local.test(spec)) problems.push(`package.json (${field}): ${spec}`);
}

if (existsSync("package-lock.json")) {
  const lock = JSON.parse(readFileSync("package-lock.json", "utf8"));
  const entry = lock.packages?.[`node_modules/${name}`];
  if (entry?.link) problems.push(`package-lock.json: link para ${entry.resolved}`);
  else if (entry?.resolved && local.test(entry.resolved))
    problems.push(`package-lock.json: ${entry.resolved}`);
  const rootSpec = lock.packages?.[""]?.dependencies?.[name];
  if (rootSpec && local.test(rootSpec)) problems.push(`package-lock.json: ${rootSpec}`);
}

if (problems.length) {
  console.error(`${name} aponta para uma cópia local:\n  ${problems.join("\n  ")}`);
  console.error(`Antes do commit: npm install github:henriquesebastiao/branding#vX.Y.Z`);
  process.exit(1);
}
