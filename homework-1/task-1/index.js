const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const LINES_AMOUNT = 3;
const data = [];

rl.on('line', (input) => {
		data.push(parseInt(input, 10))

    if (data.length === LINES_AMOUNT) {
      resolveTask(data);
			rl.close();
    }
});

const resolveTask = function(input) {
  const [finishCode, iteractorVerdict, checkerVerdict] = input;

	let res;

	switch (iteractorVerdict) {
		case 0:
			if (finishCode === 0) {
				res = checkerVerdict;
			} else {
				res = 3;
			}
			break;
		case 4:
			if (finishCode === 0) {
				res = 4;
			} else {
				res =3;
			}
			break;
		case 1:
			res = checkerVerdict;
			break;
		case 6:
			res = 0;
			break;
		case 7:
			res = 1;
			break;
		default: 
			res = iteractorVerdict;
	}

	console.log(Number(res));
	return Number(res);
};

module.exports = resolveTask;

/*
	Лена руководит разработкой тестирующей системы, в которой реализованы интерактивные задачи.
	До заверщения очередной стадии проекта осталось написать модуль, определяющий итоговый вердикт системы для интерактивной задачи. Итоговый вердикт определяется из кода завершения задачи, вердикта интерактора и вердикта чекера по следующим правилам:

	Вердикт чекера и вердикт интерактора — это целые числа от 0 до 7 включительно.
	Код завершения задачи — это целое число от -128 до 127 включительно.
	Если интерактор выдал вердикт 0, итоговый вердикт равен 3 в случае, если программа завершилась с ненулевым кодом, и вердикту чекера в противном случае.
	Если интерактор выдал вердикт 1, итоговый вердикт равен вердикту чекера.
	Если интерактор выдал вердикт 4, итоговый вердикт равен 3 в случае, если программа завершилась с ненулевым кодом, и 4 в противном случае.
	Если интерактор выдал вердикт 6, итоговый вердикт равен 0.
	Если интерактор выдал вердикт 7, итоговый вердикт равен 1.
	В остальных случаях итоговый вердикт равен вердикту интерактора.
	Ваша задача — реализовать этот модуль.
*/ 
