const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//get the system uptime in seconds but it runs over 60
console.log(`System uptime ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(currentOS)