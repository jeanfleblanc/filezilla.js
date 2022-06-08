// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
//const ftp = require("./engine/ftp.js")

document.getElementById('button-connect').addEventListener('click', (event) => {

    const host = document.getElementById('text-host').value
    const port = document.getElementById('text-port').value

    document.getElementById('remote-host').innerText = 'Connected to ' + host + ":" + port
})

document.getElementById('text-host').focus()