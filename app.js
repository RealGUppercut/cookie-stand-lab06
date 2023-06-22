"use strict";
const openHours = ["06:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
console.log(openHours.length);

const seattle = {
    location: "Seattle",
    minCx: 23,
    maxCx: 65,
    randomCx: [],
    MeanCookie: 6.3,
    hourlyCookie: [],
    dailyCookies: 0,

    calcRandomCx: function() {
        for (let i = 0; i < openHours.length; i++) {
        this.randomCx.push(generateRandomCx(this.minCx,this.maxCx));
        }
        console.log(this.randomCx);
    },

    calcHourlyCookie: function() {
        for (let i = 0; i < openHours.length; i++) {
        const hourSales = Math.ceil(this.randomCx[i]*this.MeanCookie);
        this.hourlyCookie.push(hourSales)
        this.dailyCookies += hourSales;

    }
    console.log(this.hourlyCookie);
    console.log(this.dailyCookies);
    }
}

function generateRandomCx(min,max) {
    return ((Math).floor(Math.random() * (max - min + 1) + min));
}



// function hourlyCookie(Cx,Cookie) {
//     const hourlyCookieArray = [];
//     for (let i = 0; i < openHours.length; i++) {
//         hourlyCookieArray.push((Cx * Cookie));
//     }
// }

seattle.calcRandomCx();
seattle.calcHourlyCookie();