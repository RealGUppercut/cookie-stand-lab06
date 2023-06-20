
"use strict";
const openHours = ["06:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
console.log(openHours.length);

const store = {
    location: "",
    minCx: "",
    maxCx: "",
    minCookie: "",
    maxCookie: "",
    minCookiesPerHour: "",
    maxCookiesperHour: "",

    getminCx: function() {
        this.minCx = randomCx(0,30);
        },
    
    getmaxCx: function() {
        this.maxCx = randomCx(30,100);
    },

    getminCookie: function() {
        this.minCookie = randomCookie(0,5);
    },

    getmaxCookie: function() {
        this.maxCookie = randomCookie(5,10);},

    // getminCookiesPerHour: function() {
        // this.cookiesPerHour = cookiesPerHour()
    // },

    // getminCookiesPerHour: function() {
    //     this.cookiesPerHour = 
    // },

    getlocation: {},
}

function randomCx(min,max){
    const minCxArray = [];
    for (let i = 0; i < openHours.length; i++) {
        minCxArray.push((Math).floor(Math.random() * (max - min + 1) + min));
    }
    console.log(minCxArray);
}

function randomCookie(min,max){
    const meanCookieArray = [];
    for (let i = 0; i < openHours.length; i++) {
        meanCookieArray.push((Math).floor(Math.random() * (max - min + 1) + min));
    }
    console.log(meanCookieArray);
}

function cookiesPerHour() {
    const cookiesPerHourArray = [];
    for (let i = 0; i < openHours.length; i++) {
        cookiesPerHourArray.push((store.minCx[i])*(store.minCookie[i]));
}
    console.log(cookiesPerHourArray);
}



store.getminCx();
store.getmaxCx();
store.getminCookie();
store.getmaxCookie();
// store.getminCookiesPerHour();