import test from 'ava'
import unpad from './index'

test((t) => {
  const source = unpad(`
    function foo() {
      console.log("foo");
      blah();
    }
  `);

  t.is(source, 'function foo() {\n  console.log(\"foo\");\n  blah();\n}')
})
