if (typeof exports != "undefined") {
  var test = require("./driver.js").test
  var testFail = require("./driver.js").testFail
}

test('param {\n\n}\n', {
  type: 'Program',
  body: [
    {
      type: 'CommandStatement',
      name: {
        type: 'Identifier',
        name: 'param'
      },
      body: []
    }
  ]
});
