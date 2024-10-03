/* Question 3: File Module
● Create a script that will do the following:
1. Remove Log files
o remove all the files from the Logs directory, if exists
o output the file names to delete
o remove the Logs directory
2. Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
o Hint: use the fs module and path module, and the process current
working directory to build directory path. It is acceptable, to have a
remove.js script and separate add.js script.*/
const fs = require('fs');
const path = require('path');
// creating Alien log file
const logsDir = path.join(__dirname, 'Logs');

const removeLogs = () => {
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        
        files.forEach(file => {
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(path.join(logsDir, file));
        });

        fs.rmdirSync(logsDir);
        console.log(`Logs dir removed.`);
    } else {
        console.log(`Logs directory NOT exist.`);
    }
};

removeLogs();
