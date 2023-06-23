"use strict";

const locationTable = document.getElementById("location-table");
// const newLocationForm = document.getElementById("new-location-form");
const openHours = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
const allLocations = [];

function generateRandomCx(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Store(location, minCx, maxCx, meanCookie) {
    this.location = location,
    this.minCx = minCx;
    this.maxCx = maxCx;
    this.meanCookie = meanCookie;
    this.randomCx = [];
    this.hourlyCookie = [];
    this.dailyCookies = 0;
    this.pushStore();
    this.render();
}

Store.prototype.calcRandomCx = function() {
    for (let i = 0; i < openHours.length; i++) {
        this.randomCx.push(generateRandomCx(this.minCx, this.maxCx));
    }
}

Store.prototype.calcHourlyCookie = function() {
    for (let i = 0; i < openHours.length; i++) {
        let hourSales = Math.ceil((this.randomCx[i] * this.meanCookie));
        this.hourlyCookie.push(hourSales);
        this.dailyCookies += hourSales;
        console.log(this.hourlyCookie)
        
    }
}

Store.prototype.pushStore = function () {
    allLocations.push(this);
  };

Store.prototype.render = function() {
    this.calcRandomCx();
    this.calcHourlyCookie();

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = this.location;
    tr.appendChild(th);

    for (let i = 0; i < openHours.length; i++) {
        const td = document.createElement("td");
        td.textContent = this.hourlyCookie[i];
        tr.appendChild(td);
    }

    const locationTotal = document.createElement("th");
    locationTotal.textContent = this.dailyCookies;
    tr.appendChild(locationTotal);

    locationTable.appendChild(tr);
}

function hourRow() {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = "Store Location";
    tr.appendChild(th);

    for (let i = 0; i < openHours.length; i++) {
        const th = document.createElement("th");
        th.textContent = openHours[i];
        tr.appendChild(th)
    }

    const totalsHeader = document.createElement("th");
    totalsHeader.textContent = "Store Totals";
    tr.appendChild(totalsHeader);
    locationTable.appendChild(tr);
}

hourRow();
    
const seattle = new Store("Seattle", 23, 65, 6.3);
const tokyo = new Store("Tokyo", 3, 24, 1.2);
const dubai = new Store("Dubai", 11, 38, 2.3);
const paris = new Store("Paris", 20, 38, 2.3);
const lima = new Store("Lima", 2, 16, 4.6);

function hourTotals() {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = "Hourly Totals";
    tr.appendChild(th);
  
    for (let i = 0; i < openHours.length; i++) {
      const th = document.createElement("th");
      let calcOverallHourSales = 0;
      for (let j = 0; j < allLocations.length; j++) {
        const locationHourSales = allLocations[j].hourlyCookie[i];
        calcOverallHourSales += locationHourSales;
      }
      th.textContent = calcOverallHourSales;
      tr.appendChild(th);
    }
  
    let grandTotal = 0;
    for (let i = 0; i < allLocations.length; i++) {
      grandTotal += allLocations[i].dailyCookies;
    }
  
    const grandTotalCell = document.createElement("th");
    grandTotalCell.textContent = grandTotal;
    tr.appendChild(grandTotalCell);
  
    locationTable.appendChild(tr);
  }
  hourTotals();
  

        
        