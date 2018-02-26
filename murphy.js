const path = require("path");
const fs = require("fs");
const glob = require("glob")
const {exec} = require('child_process');
const cmd = "node ";

module.exports = {
    run: function(dirname)
    {
        glob(dirname+"/*.js.murphy/*.js",function(er,files)
        {
            for(var i = 0;i < files.length;i++)
            {
                exec(cmd+" "+files[i], (err, stdout, stderr) =>
                {
                    if (err)
                        console.log("Unable to execute: "+cmd);
    
                    if(stdout)
                        console.log(stdout);
                    if(stderr)
                        console.log(stderr);
                });
            }
        });
    },
    load: function(base,file)
    {
        return fs.readFileSync(path.resolve(base,file)).toString();
    }
};
