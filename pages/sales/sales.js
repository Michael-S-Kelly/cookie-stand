'use strict';

var cookies = [];


function CookSales(name, minCust, maxCust, avgCook) { //Create Object 'CookSales'
	this.name = name;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgCook = avgCook;
	this.hoursOfOps = ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p','3p', '4p', '5p', '6p', '7p', '8p'];
	this.dailyTotal = 0;
	this.numCust = [];
	this.numCook = [];

	this.custPerHr = function(min, max){ //for loop to create the random number of cookies sold per hour within the min/max
		for(var i = 0; i < this.hoursOfOps.length; i++){
			this.numCust.push(Math.round(Math.floor(Math.random() * (max - min + 1) + min) * this.avgCook));//splitting this line up into two lines didn't work for some reason
			//still need to create a sum line to add each of the hours of cookie sales at one location for the day
			//this.dailyTotal += this.numCust;
		}
	};


	cookies.push(this);
	this.render();
}


CookSales.prototype.render = function() { //create a table and send the gathered information to the table
	//creat elements section
	var tmainEl = document.getElementById('main-stuff');//decided to start from the main element and create the whole table
	var tableEl = document.createElement('table');
	var theadEl = document.createElement('thead');
	var tbodyEl = document.createElement('tbody');
	var tfootEl = document.createElement('tfoot');
	var trEl = document.createElement('tr');
	var nameEl = document.createElement('th');
	var numCookEl = document.createElement('tr');
	var sumCookEl = document.createElement('tr');
	//attach the elements to the next one in line
	tmainEl.appendChild(tableEl);

	tableEl.appendChild(theadEl);
	tableEl.appendChild(tbodyEl);
	tableEl.appendChild(tfootEl);

	tbodyEl.appendChild(trEl);

	trEl.appendChild(nameEl);
	trEl.appendChild(numCookEl);
	trEl.appendChild(sumCookEl);

	this.custPerHr(this.minCust, this.maxCust);

	nameEl.textContent = this.name;
	numCookEl.textContent = this.numCust;
	//sumCookEl.textContent = this.dailyTotal;
};

new CookSales('1st and Pike', 23, 65, 6.3);
new CookSales('SeaTac Airport', 3, 24, 1.2);
new CookSales('Seattle Center', 11, 38, 3.7);
new CookSales('Capital Hill', 20, 38, 2.3);
new CookSales('Alki', 2, 16, 4.6);

