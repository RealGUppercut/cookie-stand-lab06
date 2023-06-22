"use strict";

const container = document.getElementById("container");
const openHours = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
console.log(openHours.length);

const seattle = {
    location: "Seattle",
    minCx: 23,
    maxCx: 65,
    randomCx: [],
    MeanCookie: 6.3,
    hourlyCookie: [],
    dailyCookies: 0,

    calcRandomCx() {
        for (let i = 0; i < openHours.length; i++) {
        this.randomCx.push(generateRandomCx(this.minCx,this.maxCx));
        }
    },
    
    calcHourlyCookie: function() {
        for (let i = 0; i < openHours.length; i++) {
        const hourSales = Math.ceil(this.randomCx[i]*this.MeanCookie);
        this.dailyCookies += hourSales;
        this.hourlyCookie.push(hourSales)
        }
    },
        render: function() {
        this.calcRandomCx();
        this.calcHourlyCookie();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.location;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < openHours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${openHours[i]}: ${this.hourlyCookie[i]} cookies`;
          ul.appendChild(li);
        }
        const li = document.createElement("li");
        li.textContent = `Total Cookies: ${this.dailyCookies}`;
        ul.appendChild(li);
        }
    }
const tokyo = {
    location: "Tokyo",
    minCx: 3,
    maxCx: 24,
    randomCx: [],
    MeanCookie: 1.2,
    hourlyCookie: [],
    dailyCookies: 0,

    calcRandomCx() {
        for (let i = 0; i < openHours.length; i++) {
        this.randomCx.push(generateRandomCx(this.minCx,this.maxCx));
        }
    },
    
    calcHourlyCookie: function() {
        for (let i = 0; i < openHours.length; i++) {
        const hourSales = Math.ceil(this.randomCx[i]*this.MeanCookie);
        this.dailyCookies += hourSales;
        this.hourlyCookie.push(hourSales)
        }
    },
        render: function() {
        this.calcRandomCx();
        this.calcHourlyCookie();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.location;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < openHours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${openHours[i]}: ${this.hourlyCookie[i]} cookies`;
          ul.appendChild(li);
        }
        const li = document.createElement("li");
        li.textContent = `Total Cookies: ${this.dailyCookies}`;
        ul.appendChild(li);
        }
    }

const dubai = {
    location: "Dubai",
    minCx: 11,
    maxCx: 38,
    randomCx: [],
    MeanCookie: 3.7,
    hourlyCookie: [],
    dailyCookies: 0,

    calcRandomCx() {
        for (let i = 0; i < openHours.length; i++) {
        this.randomCx.push(generateRandomCx(this.minCx,this.maxCx));
        }
    },
    
    calcHourlyCookie: function() {
        for (let i = 0; i < openHours.length; i++) {
        const hourSales = Math.ceil(this.randomCx[i]*this.MeanCookie);
        this.dailyCookies += hourSales;
        this.hourlyCookie.push(hourSales)
        }
    },
        render: function() {
        this.calcRandomCx();
        this.calcHourlyCookie();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.location;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < openHours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${openHours[i]}: ${this.hourlyCookie[i]} cookies`;
          ul.appendChild(li);
        }
        const li = document.createElement("li");
        li.textContent = `Total Cookies: ${this.dailyCookies}`;
        ul.appendChild(li);
        }
    }

const paris = {
    location: "Paris",
    minCx: 20,
    maxCx: 38,
    randomCx: [],
    MeanCookie: 2.3,
    hourlyCookie: [],
    dailyCookies: 0,

    calcRandomCx() {
        for (let i = 0; i < openHours.length; i++) {
        this.randomCx.push(generateRandomCx(this.minCx,this.maxCx));
        }
    },
    
    calcHourlyCookie: function() {
        for (let i = 0; i < openHours.length; i++) {
        const hourSales = Math.ceil(this.randomCx[i]*this.MeanCookie);
        this.dailyCookies += hourSales;
        this.hourlyCookie.push(hourSales)
        }
    },
        render: function() {
        this.calcRandomCx();
        this.calcHourlyCookie();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.location;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < openHours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${openHours[i]}: ${this.hourlyCookie[i]} cookies`;
          ul.appendChild(li);
        }
        const li = document.createElement("li");
        li.textContent = `Total Cookies: ${this.dailyCookies}`;
        ul.appendChild(li);
        }
    }

const lima = {
    location: "Lima",
    minCx: 2,
    maxCx: 16,
    randomCx: [],
    MeanCookie: 4.6,
    hourlyCookie: [],
    dailyCookies: 0,

    calcRandomCx() {
        for (let i = 0; i < openHours.length; i++) {
        this.randomCx.push(generateRandomCx(this.minCx,this.maxCx));
        }
    },
    
    calcHourlyCookie: function() {
        for (let i = 0; i < openHours.length; i++) {
        const hourSales = Math.ceil(this.randomCx[i]*this.MeanCookie);
        this.dailyCookies += hourSales;
        this.hourlyCookie.push(hourSales)
        }
    },
        render: function() {
        this.calcRandomCx();
        this.calcHourlyCookie();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.location;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < openHours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${openHours[i]}: ${this.hourlyCookie[i]} cookies`;
          ul.appendChild(li);
        }
        const li = document.createElement("li");
        li.textContent = `Total Cookies: ${this.dailyCookies}`;
        ul.appendChild(li);
        }
    }

    function generateRandomCx(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    seattle.render();
    tokyo.render();
    dubai.render();
    paris.render();
    lima.render();
