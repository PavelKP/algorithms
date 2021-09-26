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
  const [amount, start, end] = input;

	const straightdRoute = Math.abs(end - start) - 1;
	const rest = amount - straightdRoute;
	const backwardRoute = rest - 2;

	const res = straightdRoute <= backwardRoute ? straightdRoute : backwardRoute;

	console.log(res);
	return res;
};

module.exports = resolveTask;

/*
	Витя работает недалеко от одной из станций кольцевой линии Московского метро, а живет рядом с другой станцией той же линии. 
	Требуется выяснить, мимо какого наименьшего количества промежуточных станций необходимо проехать Вите по кольцу, чтобы добраться с работы домой.

	Формат ввода
	Станции пронумерованы подряд натуральными числами 1, 2, 3, …, N (1-я станция – соседняя с N-й), N не превосходит 100.

	Вводятся три числа: сначала N – общее количество станций кольцевой линии, а затем i и j – номера станции, на которой Витя садится, 
	и станции, на которой он должен выйти. Числа i и j не совпадают. Все числа разделены пробелом.

	Формат вывода
	Требуется выдать минимальное количество промежуточных станций (не считая станции посадки и высадки), которые необходимо проехать Вите.
*/ 
