'usestrict';
var hoursOfOps = ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p'];
var cookies = [];
//console.log('Begining of Code');

function CookSales(name, minCust, maxCust, avgCook) { //Create Object 'CookSales'
	this.name = name;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgCook = avgCook;
	this.numCust = [];
	this.numCook = [];
	this.dailyTotal = 0;

	cookies.push(this);

	this.custPerHr(this.minCust, this.maxCust);
	this.cookPerHr();
	this.render();

	return this.numCook;

  tableFooter();
}

//console.log('CookSales Object completed');
CookSales.prototype.custPerHr = function (min, max) {
	for (var i = 0; i < hoursOfOps.length; i++) {
		var ranCustNum = Math.ceil(Math.random() * (max - min + 1) + min);
		this.numCust.push(ranCustNum);
		//console.log('Generating the number of customer per hour', ranCustNum);
	}
};

CookSales.prototype.cookPerHr = function () {
	var prodCook;
	for (var i = 0; i < hoursOfOps.length; i++) {
		prodCook = Math.round(this.numCust[i] * this.avgCook);
		this.numCook.push(prodCook);
		this.dailyTotal += prodCook;
		//console.log('Generating the number of cookies sold per hour', this.numCook);
		//console.log('Generating the total number of cookies sold for the day', this.dailyTotal);
	}
	return this.numCook;
};

CookSales.prototype.render = function () { //create a table and send the gathered information to the table
	//console.log('Rendering Table Body secion prior to filling in any of the data');
	//Create Table Body section
	var tbodyEl = document.getElementById('cookie-body');
	var trBodyEl = document.createElement('tr');
	var nameEl = document.createElement('th');

	tbodyEl.appendChild(trBodyEl);
	trBodyEl.appendChild(nameEl);

	nameEl.textContent = this.name;
	//console.log('Rendering name in the table body', this.name);

	//attach the elements to the next one in line
	//for (var j = 0; j < hoursOfOps.length; j++) {
  for (var j = 0; j < this.numCook.length; j++) {
		var numCookEl = document.createElement('td');
		trBodyEl.appendChild(numCookEl);
		numCookEl.textContent = this.numCook[j];
		//console.log('Rendering the data for the number of cookies sold each hour', j, '/', this.numCook[j]);
	}
	var sumCookEl = document.createElement('td');
	trBodyEl.appendChild(sumCookEl);
	sumCookEl.textContent = this.dailyTotal;
};

function tableHead(){
	//create Table Head section
	var theadEl = document.getElementById('cookie-head');
	var trHeadEl = document.createElement('tr');
	theadEl.appendChild(trHeadEl);
	var thHeadEl = document.createElement('th');
	trHeadEl.appendChild(thHeadEl);
	thHeadEl.textContent = ' ';
	//console.log('Rendering Table Head section prior to filling in the hours row');

	for (var i = 0; i < hoursOfOps.length; i++) {
		var hrs = document.createElement('th');
		trHeadEl.appendChild(hrs);
		hrs.textContent = hoursOfOps[i];
		//console.log('Rendering the hours row', hoursOfOps[i]);
	}
	var dailyTotEl = document.createElement('th');
	trHeadEl.appendChild(dailyTotEl);
	dailyTotEl.textContent = 'Daily Total';
	return theadEl;
}

function tableFooter() {
  var tableEl = document.getElementById('cookie-table');
  var tfootElCheck = document.createElement('tfoot');
  if(tfootElCheck) {
    tfootElCheck.remove();
  }

  var tFootEl = document.createElement('tfoot');
  var trFootEl = document.createElement('tr');
  var totalFootEl = document.createElement('th');
  totalFootEl.textContent = 'Total';
  tFootEl.appendChild(trFootEl);
  trFootEl.appendChild(totalFootEl);

  tFootEl.id = 'cookie-foot';

  tableEl.appendChild(tFootEl);

  var daySalesTotal = 0;
  for (var i = 0; i < hoursOfOps.length; i++) {
    var tdFootEl = document.createElement('td');
    var totals = 0;

    trFootEl.appendChild(tdFootEl);
    console.log('before inner footer loop');

    for (var j = 0; j < cookies.length; j++) {
		console.log('inside inner footer loop', cookies[j]);
    //console.log('inside inner footer loop', numCook[i]);
    console.log('inside inner footer loop', cookies[j].numCook[i]);
      totals += cookies[j].numCook[i];
	}
    console.log('After inner loop')
    daySalesTotal += totals;
    tdFootEl.textContent = totals;
    trFootEl.appendChild(tdFootEl);
  }
  var dailyTotals = document.createElement('td');
  dailyTotals.textContent = daySalesTotal;
  trFootEl.appendChild(dailyTotals);
}



function createTable() {
  var tmainEl = document.getElementById('main-stuff');


  var tableEl = document.createElement('table');
  var theadEl = document.createElement('thead');
  var tbodyEl = document.createElement('tbody');
  var tfootEl = document.createElement('tfoot');

  tmainEl.appendChild(tableEl);

  tableEl.appendChild(theadEl);
  tableEl.appendChild(tbodyEl);
  tableEl.appendChild(tfootEl);

  tableEl.id = 'cookie-table';
  theadEl.id = 'cookie-head';
  tbodyEl.id = 'cookie-body';
  //tfootEl.id = 'cookie-foot';
  //console.log('Create Table function');
  tableHead();
  //tableFooter();
}

createTable();

var firstAndPike = new CookSales('1st and Pike', 23, 65, 6.3);
var SeaTac = new CookSales('SeaTac Airport', 3, 24, 1.2);
var SeaCent = new CookSales('Seattle Center', 11, 38, 3.7);
var CapHill = new CookSales('Capital Hill', 20, 38, 2.3);
var Alki = new CookSales('Alki', 2, 16, 4.6);

tableFooter();

var formEl = document.getElementById('add-store');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  
  var nameInput = event.target.nameInput.value;
  var minCustInput = event.target.minCustInput.value;
  var maxCustInput = event.target.maxCustInput.value;
  var avgCookiesInput = event.target.avgCookiesInput.value;
  
  event.target.store = new CookSales(nameInput, minCustInput, maxCustInput, avgCookiesInput);
  // console.log();
  
  event.target.nameInput.value = '';
  event.target.minCustInput.value = '';
  event.target.maxCustInput.value = '';
  event.target.avgCookiesInput.value = '';
  //tableFooter();
});

//console.log('end of code');