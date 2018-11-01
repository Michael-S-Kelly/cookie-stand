var hoursOfOps = ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p'];
var cookies = [];
//console.log('Begining of Code');

function CookSales(name, minCust, maxCust, avgCook) { //Create Object 'CookSales'
	this.name = name;
	//this.name = [];
	//this.aName = this.name;
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
	/*
	createTableFooter();
	*/
}

//console.log('CookSales Object completed');
CookSales.prototype.custPerHr = function (min, max) {
	for (var i = 0; i < hoursOfOps.length; i++) {
		var ranCustNum = Math.floor(Math.random() * (max - min + 1) + min);
		this.numCust.push(ranCustNum);
		//console.log('Generating the number of customer per hour', ranCustNum);
	}
};

CookSales.prototype.cookPerHr = function () {
	for (var i = 0; i < hoursOfOps.length; i++) {
		var prodCook = Math.round(this.numCust[i] * this.avgCook);
		this.numCook.push(prodCook);
		this.dailyTotal += prodCook;
		//console.log('Generating the number of cookies sold per hour', this.numCook);
		//console.log('Generating the total number of cookies sold for the day', this.dailyTotal);
	}
};

CookSales.prototype.render = function () { //create a table and send the gathered information to the table
	//console.log('Rendering Table Body secion prior to filling in any of the data');
	//Create Table Body section
	var tbodyEl = document.getElementById('cookie-body');
	var trBodyEl = document.createElement('tr');
	var nameEl = document.createElement('th');

	tbodyEl.appendChild(trBodyEl);
	trBodyEl.appendChild(nameEl);

	// this.custPerHr(this.minCust, this.maxCust);  // NOTE: This is called twice unnecessarily
	nameEl.textContent = this.name;
	//console.log('Rendering name in the table body', this.name);

	//attach the elements to the next one in line
	for (var j = 0; j < hoursOfOps.length; j++) {
		var numCookEl = document.createElement('td');
		trBodyEl.appendChild(numCookEl);
		numCookEl.textContent = this.numCook[j];
		//console.log(this.aName);
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

function tableFooter (){
	console.log('Begining of the function');
	var tfootEl = document.getElementById('cookie-foot');
	var trFootEl = document.createElement('tr');
	tfootEl.appendChild(trFootEl);
	var thFootEl = document.createElement('th');
	trFootEl.appendChild(thFootEl);
	thFootEl.textContent = ' ';
	var totalPerHr = 0;
	var totalPerDay = 0;
	//console.log('Before the nested for loop', this.name[1]);
	for(var i = 0; i < this.name.length; i++){
		console.log('Before the inner loop');
		for(var j = 0; j < hoursOfOps.length; j++){
			totalPerHr += this.numCook[this.name[j]];
			totalPerHr.push(totalPerHr);
			console.log('This should output the sum of each shop per hour', totalPerHr);
		}

		/*
		function createTableFooter();
		var tfootElCheck = document.getElementbyId('tbl-foot');

		if (tfootElCheck) {
			tfootElCheck.remove();
		}

		var tblEl = document.getElementById('sales-table');
		var tfootEl = document.createElement('tfoot');
		var trEl = document.createElement('tr');

		var emptyThEl = documentcreateElement('th');
		trEl.appendChild(emptyTHEl);

		for(var i = 0; i < hoursOfOps.length; i++) {
			var tdEl = document.createElement('td');
			var totals = 0;
			for(var j = 0; j < stores.length; j++) {
				totals += stores[j].cookiesPerHour[i];
			}
		}

		tdEl.textContent =totals;

		*/
		totalPerDay += totalPerHr;
		totalPerDay.push(totalPerDay);
		var totPerHrEl = document.createElement('th');
		trFootEl.appendChild(totPerHrEl);
		totPerHrEl.textContent = totalPerHr;
		console.log('This should output the sum of each shop per day', totalPerDay);

	}
	var totPerDyEl = document.createElement('th');
	trFootEl.appendChild(totPerDyEl);
	totPerDyEl.textContent = totalPerDay;
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
	tfootEl.id = 'cookie-foot';
	//console.log('Create Table function');
	tableHead();
	tableFooter();
}

createTable();
//this.render();





new CookSales('1st and Pike', 23, 65, 6.3);
new CookSales('SeaTac Airport', 3, 24, 1.2);
new CookSales('Seattle Center', 11, 38, 3.7);
new CookSales('Capital Hill', 20, 38, 2.3);
new CookSales('Alki', 2, 16, 4.6);

/*
(function run() {
	createTable();
	createTableHeader();
	createTableBody();
})();
*/

function addLoc() {
	var nameInput = event.target.name.value;
	var minCustInput = event.target.minCust.value;
	var maxCustInput = event.target.maxCust.value;
	var avgCookInput = event.target.avgCook.value;

	new CookSales(nameInput, minCustInput, maxCustInput, avgCookInput);

}

var submit = document.getElementById('sub');
submit.addEventListener('click', addLoc);

/*
//var salesFormEl = document.getElementById('sales-form');
//salesFormEl.addEventListener('submit', function() {})

document.getElementById('sales-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var name = event.target.storename.value;
	var min = event.target.min.value;
	var max = event.target.max.value;
	var avg = event.target.avg.value;

	new Store(name, min, max, avg);

	event.target.storename.value = '';
	event.target.min.value = '';
	event.target.max.value = '';
	event.target.avg.value = '';
});
*/
//console.log('end of code');