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
                        console.log("stdout from: "+files[i]+" is: "+stdout);
                    if(stderr)
                        console.log("stderr from: "+files[i]+" is: "+stderr);
                });
            }
        });
    }
};
