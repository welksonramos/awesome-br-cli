import test from 'ava';
import execa from 'execa';
import pkg from './package.json';

test('Deve ser retornada o nome e a versão correta do módulo quando o parâmetro --version for usado', async t => {
  const {stdout} = await execa('./lib/awesome-br.js', ['--version']);
  t.is(stdout, `${pkg.name}: ${pkg.version}`);
});
