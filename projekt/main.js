const cars = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020, pricePerDay: 50, available: true },
    { id: 2, brand: "Honda", model: "Civic", year: 2019, pricePerDay: 45, available: true },
    { id: 3, brand: "Ford", model: "Focus", year: 2021, pricePerDay: 60, available: true },
];

function displayAvailableCars() {
    console.log("Available Cars:");
    cars.forEach(car => {
        if (car.available) {
            console.log(`${car.id}. ${car.brand} ${car.model} (${car.year}) - $${car.pricePerDay}/day`);
        }
    });
}

function rentCar(carId, days) {
    const car = cars.find(c => c.id === carId);
    if (car && car.available) {
        car.available = false;
        const totalCost = car.pricePerDay * days;
        console.log(`You have rented the ${car.brand} ${car.model} for ${days} days. Total cost: $${totalCost}`);
    } else {
        console.log("Car not available or invalid ID.");
    }
}

function returnCar(carId) {
    const car = cars.find(c => c.id === carId);
    if (car && !car.available) {
        car.available = true;
        console.log(`You have returned the ${car.brand} ${car.model}. Thank you!`);
    } else {
        console.log("Invalid car ID or the car is already available.");
    }
}

displayAvailableCars();
rentCar(1, 3); 
displayAvailableCars();
returnCar(1);
displayAvailableCars();