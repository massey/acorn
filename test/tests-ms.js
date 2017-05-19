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
      body: {
        type: 'BlockStatement',
        body: []
      }
    }
  ]
});

test('param width {\n  \n}\n', {
  type: 'Program',
  body: [
    {
      type: 'CommandStatement',
      name: {
        type: 'Identifier',
        name: 'param'
      },
      id: {
        type: 'Identifier',
        name: 'width'
      },
      body: {
        type: 'BlockStatement',
        body: []
      }
    }
  ]
});

test('param width {\n  type: \'number\'\n  value: 900\n  \nvar x = param()\n}\n', {
  type: 'Program',
  body: [
    {
      type: 'CommandStatement',
      name: {
        type: 'Identifier',
        name: 'param'
      },
      id: {
        type: 'Identifier',
        name: 'width'
      },
      body: {
        type: 'BlockStatement',
        body: [
          {
            type: 'LabeledStatement'
          },
          {
            type: 'LabeledStatement'
          },
          {
            type: 'VariableDeclaration'
          }
        ]
      }
    }
  ]
});
