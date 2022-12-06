// Code your solution in this file!
const drivers= ['Antonia', 'Nuru', 'Amari', 'Mo'];

function  returnFirstTwoDrivers() {
 return drivers.slice(0,2)

}

returnFirstTwoDrivers();

function  returnLastTwoDrivers() {
    return drivers.slice(2,4)
   
   }
   
   returnLastTwoDrivers()

 const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]
   
 const createFareMultiplier= function(distance){
    return function (unitprice){
return distance * unitprice;
    }
 }
 

const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);


function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}