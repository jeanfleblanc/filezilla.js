let ftp = require("../../engine/ftp.js")

test("username", () => {
  expect(ftp.username()).toEqual("")
})