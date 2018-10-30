/*
var locSales = ['pike', 'seaTac', 'seaCenter', 'capHill', 'alki'];
var hr = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var locIndex = 0;
var hrIndex = 0;
var hrSales;
*/

var pike = {
	locName: '1st and Pike',
	minCust: 23,
	maxCust: 65,
	avgCook: 6.3,
	Cust: Math.floor(Math.random()*(this.maxCust - this.minCust) + this.minCust),
	CookSold: Math.round(this.Cust * this.avgCook),

  Cookies: function() {
    return `${this.CookSold}`;
	},
	render: function() {
		var container = document.createElement('th');
    var tableEL = document.getElementById('cookie-spread');

    tableEL.textContent = this.CookSold;

    container.appendChild(tableEL);



    //tableEL.appendChild(container);
	}
};

pike.render();


/*var Cust =Math.floor(Math.random()*(pike.maxCust - pike.minCust) + pike.minCust);
var CookSold = Math.round(Cust * pike.avgCook);
console.log(Cust);
console.log(CookSold);

var seaTac = {
	locName: 'SeaTac Airport',
	minCust: 3,
	maxCust: 24,
	avgCook: 1.2,
};

var seaCent = {
	locName: 'Seattle Center',
	minCust: 11,
	maxCust: 38,
	avgCook: 3.7,
};

var capHill = {
	locName: 'Capital Hill',
	minCust: 20,
	maxCust: 38,
	avgCook: 2.3,
};

var alki = {
	locName: 'Alki',
	minCust: 2,
	maxCust: 16,
	avgCook: 4.6,
};

/*
function cookieSales() {
	for(var i = 0; i < locSales.length; i++) {
		for(var j = 0; j < hr.length; j++) {
			var Cust = Math.floor(Math.random()*(locSales[i].maxCust - locSales[i].minCust) + locSales[i].minCust);
			var CookSold = Math.round(Cust * locSales[i].avgCook);
			console.log(Cust);
			console.log(CookSold);
		}
	}
}
cookieSales();


/*
var Cust = Math.floor(Math.random()*(pike.maxCust - pike.minCust) + pike.minCust);
var CookSold = Math.round(Cust * pike.avgCook);
console.log(Cust);
console.log(CookSold);



function hrSales(locName, minCust, maxCust, avgCook) {
	this.locName = locName;
	this.minCust = minCust;
	this,maxCust = maxCust;
	this.avgCook = avgCook;

};




}

var locSales = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var hr = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var minCust = [23, 3, 11, 20, 2];
var maxCust = [65, 24, 38,38,16];
var avgCook = [6.3, 1.2, 3.7, 2.3, 4.6];

var hrIndex;
var locIndex;
var hrSales;

for(locIndex = 0; locIndex < locSales.length; locIndex++) {
    for(hrIndex = 0; hrIndex < minCust.length; hrIndex++) {
        var numCust = numCust(random(minCust[hrIndex], maxCust[hrIndex]));
        hrSales = numCust * avgCook[hrIndex];
    }
}
*/