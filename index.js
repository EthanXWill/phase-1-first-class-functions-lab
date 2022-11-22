const returnFirstTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(numberOfDrivers) {
    return function fareCost(fare) {
        return numberOfDrivers * fare;
    };
};

const fareDoubler = function(fare) {
    return function doubler(fare) {
        return fare * 2;
    };
}