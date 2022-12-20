//http://127.0.0.1:5500/index.html

//console.dir(document);

// console.dir(document.domain);
// console.dir(document.URL);
// console.dir(document.title);
// // document.title = 123;
// console.dir(document.doctype);
// console.dir(document.head);
// console.dir(document.body);
// console.dir(document.all);
// console.dir(document.all[10]);
// // document.all[10].textContent = "hello";
// console.dir(document.forms);
// console.dir(document.links);
// console.dir(document.images);

//get elementbyid
// console.dir(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle)

// headerTitle.textContent='Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText)

// headerTitle.innerHTML = '<h3>Hello</h3>'

// headerTitle.style.borderBottom = 'solid 3px #000';


// GetELEMENTBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textcontent="Hello 2";
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';


// items.style.backgroundColor = "#f4f4f4";
// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4'

// }

// items[2].style.backgroundColor = 'green';

// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold'

// }

//commented
//GetElementsbyTAgName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textcontent='Hello 2';
// li[1].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'yellow';

// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4'

// }

//QUERYSELECTOR
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello world'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector
('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

//QuerySelectorALL
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
console.log(odd)
var even=document.querySelectorAll('li:nth-child(even)');

for(var i =0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4'
    even[i].style.backgroundColor = 'accc'
}


