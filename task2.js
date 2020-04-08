// data is an array of objects

let data = [
  {
    principal: 2500,
    time: 1.8,
  },
  {
    principal: 1000,
    time: 5,
  },
  {
    principal: 3000,
    time: 1,
  },
  {
    principal: 2000,
    time: 3,
  },
];

// interestData is a function that takes an array as an arguement
function interestCalculator(arr) {
  // declare and initialize an array called interestData to store the objects to be derived.
  let interestData = [];

  for (let i = 0; i < arr.length; i++) {
    let principal = data[i].principal;
    let time = data[i].time;

    // declare and initialize an object to store the principal, rate, time and interest with their corresponding values
    let dataProp = {};

    //  a function which updates the dataProp object and pushes it to the interestData array
    function updateData(principal, rate, time, interest) {
      // assigns the the value of principal to principal key in the dataProp object
      dataProp.principal = principal;
      // assigns the the value of rate to rate key in the dataProp object
      dataProp.rate = rate;
      // assigns the the value of time to time key in the dataProp object
      dataProp.time = time;
      // assigns the the value of interest to interest key in the dataProp object
      dataProp.interest = interest;

      //pushes the dataProp object to the interestData array
      interestData.push(dataProp);
    }
    // checks if principal >= 2500 and time > 1 and time < 3
    if (principal >= 2500 && time > 1 && time < 3) {
      let rate = 3;
      //  calculates the value of interest
      let interest = (principal * rate * time) / 100;
      updateData(principal, rate, time, interest);
    } else if (principal >= 2500 && time >= 3) {
      let rate = 4;
      let interest = (principal * rate * time) / 100;
      updateData(principal, rate, time, interest);
    } else if (principal <= 2500 || time <= 1) {
      let rate = 2;
      let interest = (principal * rate * time) / 100;
      updateData(principal, rate, time, interest);
    } else {
      let rate = 1;
      let interest = (principal * rate * time) / 100;
      updateData(principal, rate, time, interest);
    }
  }
  console.log(interestData);
  return interestData;
}

interestCalculator(data);
