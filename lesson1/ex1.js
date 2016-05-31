function get_info(shape){
		result = {
			'perimeter' : 0,
			'square' : 0
		}
		switch(shape['type']) {
			case 'circle':
				result['square'] = (Math.PI * Math.pow(shape['r'], 2)).toFixed(2);
				result['perimeter'] = (2 * Math.PI * shape['r']).toFixed(2);
				break;
			case 'rectangle':
				result['square'] = (shape['a'] * shape['b']).toFixed(2);
				result['perimeter'] = (2 * (shape['a'] + shape['b'])).toFixed(2);
				break;
			default:
				console.log("shape type error");
				return;
		}
		return result;
	}

function Triangle(shape) {
	this.a = shape['a'];
	this.b = shape['b'];
	this.c = shape['c'];
	this.perimeter = (this.a + this.b + this.c);
	
	var half_per = this.perimeter * 0.5;
	this.square = (Math.sqrt(half_per * (half_per - this.a) * (half_per - this.b) * (half_per - this.c))).toFixed(2);
};
	
var main = function() {
	//1-2
	var admin, name = "Василий";
	var MAX_LENGHT = 10;
	alert("Привет, Javascript");
	admin = name;
	console.log(admin);
	//3
	shape1 = {
		'type' : 'rectangle',
		'a' : 10,
		'b' : 5
	};
	shape2 = {
		'type' : 'circle',
		'r' : 10
	};
	shape3 = {
		'type' : 'triangle',
		'a' : 20,
		'b' : 18,
		'c' : 8
		
	};
	console.log(get_info(shape1));
	console.log(get_info(shape2));
	console.log(get_info(shape3));
	//4
	triangle1 = new Triangle(shape3);
	console.log(triangle1);
	//5
	/* pure JS 
	var newElement1 = document.createElement('div');
	newElement1.className = 'box1';
	var newElement2 = document.createElement('div');
	newElement2.className = 'box2';
	document.body.appendChild(newElement1);
	document.body.appendChild(newElement2);
	*/
	//JQuery
	var newElement1 = $('<div />', {
		class : 'box1',
	});
	var newElement2 = $('<div />', {
		class : 'box2',
	});
	$('body').append(newElement1);
	$('body').append(newElement2);
	
	/* or  
	$('body').append("<div class='box1'></div>");
	$('body').append("<div class='box2'></div>");
	*/
	//6
	$('#text-input').on('keyup', function(){
		text = $(this).val();
		if (text.length > MAX_LENGHT) {
			$(this).val(text.substring(0,MAX_LENGHT));
		}
	});
	
};

$(document).ready(main);
