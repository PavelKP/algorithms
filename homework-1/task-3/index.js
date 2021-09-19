const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = [];

rl.on('line', (input) => {
	data = input.trim().split(' ');
	data = data.map((input) => parseInt(input, 10));
  resolveTask(data);
	rl.close();
});

const resolveTask = function(input) {
  const [first, second, year] = input;

	let res = 0;

	if ((first <= 12 && second > 12) || (first > 12 && second <= 12) || first === second) {
		res = 1;
	}

	console.log(res);
	return res;
};

module.exports = resolveTask;

/*
	Как известно, два наиболее распространённых формата записи даты — это европейский (сначала день, потом месяц, потом год) и американски (сначала месяц, потом день, потом год). 
	Системный администратор поменял дату на одном из бэкапов и сейчас хочет вернуть дату обратно. Но он не проверил, в каком формате дата используется в системе. 
	Может ли он обойтись без этой информации?
	Иначе говоря, вам даётся запись некоторой корректной даты. 
	Требуется выяснить, однозначно ли по этой записи определяется дата даже без дополнительной информации о формате.
*/
