// var div1 = document.createElement('div');
// div1.innerText= 'Zdravo Svetu!';
// div1.style.color = '#ffffff';
// div1.style.backgroundColor = 'red';
// div1.style.height = '300px';

// console.log(div1);

// var body = document.querySelector('body');
// body.appendChild(div1);

// var body = document.querySelector('body');
// var ul1 = document.createElement('ul');
// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');
// var li4 = document.createElement('li');
// var li5 = document.createElement('li');


// li1.innerText = 'Ja sum Vaso Manto'
// li2.innerText = 'Ke te zakolaaaaaam da znajsh!!!!!!!!'
// li3.innerText = 'Ke te zakolam da znajsh'
// li4.innerText = 'Ke te zakolaam da znajsh!'
// li5.innerText = 'Ke te zakolaaam da znajsh!!'

// ul1.appendChild(li1);
// ul1.appendChild(li2);
// ul1.appendChild(li3);
// ul1.appendChild(li4);
// ul1.appendChild(li5);
// body.appendChild(ul1);

// ul1.style.height = '300px';

var body = document.querySelector('body');
var table = document.createElement('table');
var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');



var studenti = [
	{ime: 'Pero', prezime: 'Perovski', prosek: 7},
	{ime: 'Janko', prezime: 'Jankovski', prosek: 9},
	{ime: 'Stanko', prezime: 'Stankovski', prosek: 6.5},
	{ime: 'Bratmi', prezime: 'a za bratmi', prosek: 9.5},
];

for(let i = 0; i < studenti.length; i++){
	var tr = document.createElement('tr')
	var td1 = document.createElement('td')
	var td2 = document.createElement('td')
	var td3 = document.createElement('td')
		
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
}

body.appendChild(table);
table.appendChild(tr);
table.style.height = '300px';