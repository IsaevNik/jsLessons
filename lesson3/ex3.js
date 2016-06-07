function subex1(num_of_lines, symbol){
	for(var i = 1; i <= num_of_lines; i++){
		var str = '';
		for(var j = i; j > 0; j--){
			str += symbol;
		}
		console.log(str + '\n');
	}
}

function subex2(w, symbol_w, symbol_b){
	var result = '';
	var sq = [[symbol_w, symbol_b],[symbol_b, symbol_w]];
	for(var i = 0; i < w; i++){
		config = sq[i % 2];
		for(var j = 0; j < w; j++){
			result += config[j % 2];
		}
		result += '\n';
	}
	console.log(result);
}

function subex3() {
	say('Вася'); 
	/* Так как объявление функции say - Function Declaration, то функция будет определена 
	до выполнения кода, когда код начнёт выполнятся на момент вызова функции say переменная phrase будет ещё не определена,
	поэтому выведется Вася, undefine */
	var phrase = 'Привет';

	function say (name) {
		console.log( name + ", " + phrase );
	}
}

function subex4(){
	var value = 0;

	function f() {
		if (1) {
			value = true;
		} else {
			var value = false;
		}

		alert( value ); /* true во время фазы инициализации произойдёт инициализации переменных value (глобальной и локальной) и функции f 
		затем на фазе выполнения произойдёт присвоение value = 0 и вызовется функция f, в которой по условному опературу  
		выполнится присвоение локальной переменной value = true; */
		}
	f();
}

function subex5(){
	function makeCounter() {
		var currentCount = 1;
		makeCounter.currentCount = 1;
		return function() {
			var currentCount;
			console.log(makeCounter.currentCount);
		// можно ли здесь вывести currentCount из внешней функции (равный 1)? если сделать currentCount - свойством функции
		};
	}
	makeCounter()();
}
function subex6(){
	
	var currentCount = 1;

	function makeCounter() {

		return function() {
			return currentCount++; /*постфиксная форма, сначала возвращается значение 
			потом инкрементируется по этому для counter вначале выдется 1 */
		};
	}

	var counter = makeCounter();
	var counter2 = makeCounter();

	console.log( counter() ); // 1
	console.log( counter() ); // 2

	console.log( counter2() ); /* 3 так как функция создаётся перед выполнением программы поэтому в [[scope]] функции
	makeCounter запишится лексиграфическое окружение функции subex6 с переменной currentCount и вызов makeCounter вернёт функцию, 
	при вызове которой мы постоянно будем обращаться к внешней (для функции makeCounter) переменной. Инными словами currentCount для 
	всех экземпляров counter будет указывать на один и тот же адрес ячейки*/
	console.log( counter2() ); // 4
}

function subex7(num, symbol){
	function makeTriangle(symbol){
		var count = 1;
		return function(){
			var str = '';
			for(var j = count++; j > 0; j--){
				str += symbol;
			}
			return str + '\n';
		}
	}

	var triangle = makeTriangle(symbol);
	for(var i = 0; i < num; i++){
		console.log( triangle() );
	}

}

(function hw(){
	subex1(7, '^');
	subex2(8, '#', '&');
	subex3();
	subex4();
	subex5();
	subex6();
	subex7(7, '*');
	
})()