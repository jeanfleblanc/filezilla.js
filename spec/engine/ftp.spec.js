let ftp = require("../../engine/ftp.js")

test("host", () => {
  expect(ftp.host()).toEqual("")
})

test("port", () => {
  expect(ftp.port()).toEqual("")
})

test("username", () => {
  expect(ftp.username()).toEqual("")
})

test("password", () => {
    expect(ftp.password()).toEqual("")
})

test("directoryContents", () => {
    expect(ftp.directoryContents()).toEqual("Files")
})