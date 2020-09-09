const greet = require("./greet.js");


test('greet', () => {
  expect(greet("Ed")).toMatch("Hi Ed!")
})
