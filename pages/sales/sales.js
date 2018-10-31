var cookies = [];


function CookSales(name, minCust, maxCust, avgCook) {
	this.name = name;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgCook = avgCook;
	this.hoursOfOps = ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p','3p', '4p', '5p', '6p', '7p', '8p'];
	this.dailyTotal = 0;
	this.numCust = [];
	this.numCook = [];



	this.custPerHr = function(min, max){
		for(var i = 0; i < this.hoursOfOps.length; i++){
			this.numCust.push(Math.floor(Math.random() * (max - min + 1) + min));
		}
	};
	/*
	this.cookPerHr = function(){
		for(var i = 0; i < this.hoursOfOps.length; i++){
			this.numCook = Math.round(this.numCust * this.avgCook);
			cookies[i].render(this.numCook);
			//custPerHr.push(this.numCook);
		}
	}*/

	cookies.push(this);
	this.render();
	}

	//custPerHr.push(numCook);







/*
function custPerHr(min, max){
	for(var i = 0; i < this.hoursOfOps.length; i++){
		var numCust = Math.floor(Math.random() * (max - min + 1) + min);
		var numCook = Math.round(numCust * this.avgCook);
		console.log (numCook);
		cookies[i].render(numCook);
		custPerHr.push(numCook);
	}
}
*/

//function createTable() {
CookSales.prototype.render = function() { //console.log('rendering this;', this);
	var tmainEl = document.getElementById('main-stuff');
	var tableEl = document.createElement('table');
	var theadEl = document.createElement('thead');
	var tbodyEl = document.createElement('tbody');
	var tfootEl = document.createElement('tfoot');
	var thEl = document.createElement('th');
	var numCookEl = document.createElement('tr');
	tmainEl.appendChild(tableEl);

	tableEl.appendChild(theadEl);
	tableEl.appendChild(tbodyEl);
	tableEl.appendChild(tfootEl);

	tbodyEl.appendChild(thEl);
	tbodyEl.appendChild(numCookEl);
	console.log(this.numCust);
	this.custPerHr(this.minCust, this.maxCust);
	numCookEl.textContent = this.numCook;
};

//createTable();


new CookSales('1st and Pike', 23, 65, 6.3);
new CookSales('SeaTac Airport', 3, 24, 1.2);
new CookSales('Seattle Center', 11, 38, 3.7);
new CookSales('Capital Hill', 20, 38, 2.3);
new CookSales('Alki', 2, 16, 4.6);

