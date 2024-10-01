function queueTime(queues, n) {
  const cashier = [];

  // Draw Cashier
  for (let i = 1; i <= n; i++) {
    cashier.push({
      available: true,
      count: 0,
      order: i,
    });
  }

  for (let i = 0; i < queues.length; i++) {

    let queue = queues[i];
    let cashierAvailableCheck = cashier.find((val) => val.available === true);

    if (typeof cashierAvailableCheck === "undefined") {
        
      const getAvailableCashier = cashier.filter((val) => val.available === false);
      const getMinOrder = Math.min(...getAvailableCashier.map((val) => val.count));
      let cashierAvailableCheck = cashier.find( (val) => val.count === getMinOrder );

      cashierAvailableCheck.count = cashierAvailableCheck.count + queue;

      continue;
    }

    cashierAvailableCheck.available = false;
    cashierAvailableCheck.count = cashierAvailableCheck.count + queue;
  }

  return Math.max(...cashier.map(val => val.count));
}

