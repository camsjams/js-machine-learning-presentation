const fs = require('fs');

const SECRET_NUMBER = 3;
const TOTAL = 100;
const FILE_NAME = `./src/static/data/multi-${TOTAL}.csv`;

fs.appendFileSync(FILE_NAME, 'Id,Input,Result\n');
for (let i = 0; i < TOTAL; i++) {
	fs.appendFileSync(FILE_NAME, `someId_${i},${i},${i * SECRET_NUMBER}\n`);
}

