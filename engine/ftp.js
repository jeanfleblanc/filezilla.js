const basicftp = require("basic-ftp")

let host = () => {
    return ""
}

let port = () => {
    return ""
}

let username = () => {
    return ""
}

let password = () => {
    return ""
}

let directoryContents = () => {
    return "Files"
}

let connect = async () => {
    const client = new basicftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: host,
            user: username,
            password: password,
            secure: true
        })
        console.log(await client.list())
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}

module.exports = {
    host,
    port,
    username,
    password,
    connect,
    directoryContents
}