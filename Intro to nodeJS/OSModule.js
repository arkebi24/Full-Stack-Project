let os = require("os")
let spec = [os.arch(), os.platform(), os.version(), os.networkInterfaces(), os.cpus()]
spec.map((fn) => {
    console.log(fn);
})