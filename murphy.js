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
                console.log("----------------");
                console.log("test: "+files[i]);
                console.log("----------------");
                exec(cmd+" "+files[i], (err, stdout, stderr) =>
                {
                    if (err)
                        console.log("Unable to execute: "+cmd);
    
                    //the *entire* stdout and stderr (buffered)
                    console.log(`stdout: ${stdout}`);
                    console.log(`stderr: ${stderr}`);
                    console.log("----------------");
                });
            }
        });
    }
};
