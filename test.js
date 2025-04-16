const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("3.5 dollars should be (3.5 / 1.07) * 156.5 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const Yen = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars and 156.5 Yen, then 3.5 dollars should be (3.5 / 1.07)*156.5
    const expected = Math.round(((3.5 / 1.07) * 156.5) * 100) / 100; 
    
    // This is the comparison for the unit test
     expect(Math.round(Yen * 100) / 100).toBe(expected);
})

test("3.5 Pounds should be (3.5 / 156.5) * 0.87 Pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const Pounds = fromYenToPound(3.5);

    // If 1 euro is 156.5 Yen and 0.87 Pounds, then 3.5 Yen should be (3.5 / 156.5)*0.87
    const expected = Math.round(((3.5 / 156.5) * 0.87) * 100) / 100; 
    
    // This is the comparison for the unit test
     expect(Math.round(Pounds * 100) / 100).toBe(expected);
})
