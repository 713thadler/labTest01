const fs = require('fs');
const path = require('path');
// creating Alien log file
const logsDir = path.join(__dirname, 'Logs');

const createLogs = () => {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log(`Logs directory created.`);
    }

    process.chdir(logsDir);

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        console.log(`Created file: ${fileName}`);
    }
};

createLogs();
