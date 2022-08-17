function MoneyNeeded(fruit, weight, pricePerKilo) {
    let totalMoney = weight / 1000 * pricePerKilo;

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}
