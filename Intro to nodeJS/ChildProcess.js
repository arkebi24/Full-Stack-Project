let cp = require("child_process");
let out = cp.execSync('node abc.js')
console.log(" "+ out);
