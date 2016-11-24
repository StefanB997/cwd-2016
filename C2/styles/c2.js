function i2c(i){
	var result = i * 0.39;
	return result;
}
var i = 8;
// console.log(i);

var a = 3;
var b = 27;

// if(a>4 && b<50){
// 	console.log('VISTINA');
// }else{
// 	console.log('NEVISTINA');
// }

// a = 5;
// b = 10;
// var c = 15;
// var b = 25;

// // if(a < 10 && (b > 14 || c > 100) || !(d == 20)){
// 	console.log('vistina');
// }else{
// 	console.log('nevistina');
// }

// var e = 5;

// if(e <= 5){
// 	console.log('mal broj');
// } else if(e >5 && e <= 10){
// 	console.log ('sreden broj');
// } else {
// 	console.log('golem broj');
// }

// var ovoshje = 'cresa';
// var dolzina_ovoshje = ovoshje.length;
// console.log(dolzhina_ovoshje);


// function ubavoOvoshje(o){
//   return o.length % 2 == 0;
// }

// var u = ubavoOvoshje('portokal');

// if(u){
// 	console.log('ovoshjeto e top');
// }else{
// 	console.log('ovoshjeto smrdi');
// }


function matematika(operator, eden, dva){
	switch (operator){
		case '+':
		return eden + dva;
		break;
		case '/':
		return eden / dva;
		break;
		case '-':
		return eden - dva;
		break;
		case '*':
		return eden * dva;
		break;
	}
}

var s = matematika('+', 2, 4);
console.log(s);
var d = matematika('/', 6, 3);
console.log(d);
var o = matematika('-', 6, 3);
console.log(o);
var m = matematika('*', 6, 3);
console.log(m);

// var grad = 'LAZAROPOLE';

// switch(grad){
// 	case 'Veles':
// 		console.log('Zdravo Veleshani');
// 	break;
// 	case 'Skopje':
// 		console.log('Zdravo Skopjani');
// 	break;
// 	case 'Ohrid':
// 		console.log('Zdravo Ohrigjani');
// 	break;

// 	default:
// 		console.log('Invalid Input');
// 	break;
// }