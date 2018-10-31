var cookies = [];
//console.log('Begining of Code');

function CookSales(name, minCust, maxCust, avgCook) { //Create Object 'CookSales'
	this.name = name;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgCook = avgCook;
	this.hoursOfOps = ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p'];
	this.numCust = [];
	this.numCook = [];
	this.dailyTotal = 0;

	cookies.push(this);

	this.custPerHr(this.minCust, this.maxCust);
	this.cookPerHr();
	this.render();
}

//console.log('CookSales Object completed');
CookSales.prototype.custPerHr = function (min, max) {
	for (var i = 0; i < this.hoursOfOps.length; i++) {
		var ranCustNum = Math.floor(Math.random() * (max - min + 1) + min);
		this.numCust.push(ranCustNum);
		//console.log('Generating the number of customer per hour', ranCustNum);
	}
};

CookSales.prototype.cookPerHr = function () {
	for (var i = 0; i < this.hoursOfOps.length; i++) {
		var prodCook = Math.round(this.numCust[i] * this.avgCook);
		this.numCook.push(prodCook);
		this.dailyTotal += prodCook;
		//console.log('Generating the number of cookies sold per hour', this.numCook);
		//console.log('Generating the total number of cookies sold for the day', this.dailyTotal);
	}
};

CookSales.prototype.render = function () { //create a table and send the gathered information to the table
	//create Table Head section
	var theadEl = document.createElement('thead');
	var trHeadEl = document.createElement('tr');
	theadEl.appendChild(trHeadEl);
	var thHeadEl = document.createElement('th');
	trHeadEl.appendChild(thHeadEl);
	thHeadEl.textContent = 'xxxxxxxxxxxx';
	//console.log('Rendering Table Head section prior to filling in the hours row');

	for (var i = 0; i < this.hoursOfOps.length; i++) {
		var hrs = document.createElement('th');
		trHeadEl.appendChild(hrs);
		hrs.textContent = this.hoursOfOps[i];
		//console.log('Rendering the hours row', this.hoursOfOps[i]);
	}

	//Create Table Body section
	var tbodyEl = document.createElement('tbody');
	var trBodyEl = document.createElement('tr');
	var nameEl = document.createElement('th');
	var sumCookEl = document.createElement('td');
	tbodyEl.appendChild(trBodyEl);
	trBodyEl.appendChild(nameEl);
	trBodyEl.appendChild(sumCookEl);
	this.custPerHr(this.minCust, this.maxCust);
	nameEl.textContent = this.name;
	//console.log('Rendering Table Body secion prior to filling in any of the data');

	//attach the elements to the next one in line
	for (var j = 0; j < this.hoursOfOps.length; j++) {
		var numCookEl = document.createElement('td');
		trBodyEl.appendChild(numCookEl);
		numCookEl.textContent = this.numCook[j];
		//console.log('Rendering the data for the number of cookies sold each hour', j, '/', this.numCook[j]);
	}
};


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
}

createTable();





/*var first = */new CookSales('1st and Pike', 23, 65, 6.3);
//first.render();
//new CookSales('SeaTac Airport', 3, 24, 1.2);
//new CookSales('Seattle Center', 11, 38, 3.7);
//new CookSales('Capital Hill', 20, 38, 2.3);
//new CookSales('Alki', 2, 16, 4.6);



//console.log('end of code');