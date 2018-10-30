var cookies = [];

function CookSales(name, minCust, maxCust, avgCook) {
	this.name = name;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgCook = avgCook;
	this.hoursOfOps = ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p','3p', '4p', '5p', '6p', '7p', '8p'];
	this.dailyTotal = 0;


	this.custPerHr = function(min, max){
		for(var i = 0; i < this.hoursOfOps.length; i++){
			var numbCust = Math.floor(Math.random() * (max - min + 1) + min);
		}
	};
	this.cookPerHr = function(){
		var numCook = Math.round(numCust * this.avgCook);
	};

	cookies.push(this);
	this.render();

};