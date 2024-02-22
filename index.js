function processAges(ages) {
  //!your solution should be inside the function.
  doubledAges = []
  //1-Use a for loop to iterate over the ages array and double each age. Store the doubled ages in a new array called doubledAges and Print the doubledAges array to the console.
  for (const i in ages) {
      doubledAges.push(ages[i] * 2)
  }
  //2-Use the forEach method to loop through the ages array and print each age to the console.
  ages.forEach((e, index) => {console.log(e);})
  //3-Use the filter method to create a new array called adults that contains only ages greater than or equal to 18.
  adults = ages.filter(function checkAdult(age) {
    return age >= 18;
  })
  //4-Use the map method to create a new array called ageStrings that contains string representations of each age in the ages array.
  ageStrings = []
  ages.map((e) => {ageStrings.push(e.toString());})
  //5-please make sure to name your arrays(variables) accordingly to the names in the return statement.
  return { doubledAges, adults, ageStrings };
}



module.exports = processAges;
