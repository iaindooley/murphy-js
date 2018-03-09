const path     = require("path");
const fs       = require("fs");
const glob     = require("glob")
const {exec}   = require('child_process');
const cmd      = "node ";
var   cmd_args = "";

module.exports = {
    run: function(dirname)
    {
        if(process.argv.length > 2)
        {
            for(var i = 2;i < process.argv.length;i++)
                cmd_args += " "+process.argv[i];
        }
    
        glob(dirname+"/**/*.js.murphy/*.js",function(er,files)
        {
            for(var i = 0;i < files.length;i++)
            {
                exec(cmd+" "+files[i]+cmd_args, (err, stdout, stderr) =>
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
