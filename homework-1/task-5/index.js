const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];

rl.on('line', (input) => {
		if (data.length === 0) {
			data.push(parseInt(input, 10))
    } else if (data.length === 1) {
			const coords = input.split(' ').map((el) => parseInt(el, 10));
			data.push(...coords);

			resolveTask(data);
			rl.close();
		}
});

const resolveTask = function(input) {
  const [d, x, y] = input;

	let answer;

	const moduleSum = Math.abs(x) + Math.abs(y);

	if ( moduleSum <= d && x >= 0 && y >= 0) {
		answer = 0;
	} else {
		const distance = [moduleSum, Math.abs(x - d) + Math.abs(y), Math.abs(y - d) + Math.abs(x)];

		answer = 1;
		let value = distance[0];

		for (let i = 1; i < distance.length; i++) {
			if (distance[i] < value) {
				value = distance[i];
				answer = i+1;
			}
		}
	}

	console.log(answer);
	return answer;
};

module.exports = resolveTask;


/*

На координатной плоскости расположены равнобедренный прямоугольный треугольник ABC с длиной катета d и точка X. Катеты треугольника лежат на осях координат, 
а вершины расположены в точках: A (0,0), B (d,0), C (0,d).

Напишите программу, которая определяет взаимное расположение точки X и треугольника. Если точка X расположена внутри или на сторонах треугольника, выведите 0. 
Если же точка находится вне треугольника, выведите номер ближайшей к ней вершины.

Формат ввода
Сначала вводится натуральное число d (не превосходящее 1000), а затем координаты точки X – два целых числа из диапазона от ­–1000 до 1000.

Формат вывода
Если точка лежит внутри, на стороне треугольника или совпадает с одной из вершин, то выведите число 0. Если точка лежит вне треугольника, 
то выведите номер вершины треугольника, к которой она расположена ближе всего (1 – к вершине A, 2 – к B, 3 – к C). 
Если точка расположена на одинаковом расстоянии от двух вершин, выведите ту вершину, номер которой меньше.

*/
