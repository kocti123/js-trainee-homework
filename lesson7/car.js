class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  get brand() {
    return this.#brand;
  }
  set brand(val) {
    if (
      typeof val !== 'string' ||
      val.length > 50 ||
      val.length < 1
    ) {
      throw new Error('Неправильное название')
    }
    this.#model = val;
  }

  get model() {
    return this.#model;
  }
  set model(val) {
    if (
      typeof val !== 'string' ||
      val.length > 50 ||
      val.length < 1
    ) {
      throw new Error('Неправильное название')
    }
    this.#model = val;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }
  set yearOfManufacturing(val) {
    if (
      !Number.isFinite(val) ||
      val > new Date().getFullYear() ||
      val < 1900
    ) {
      throw new Error('Неправильная дата');
    }
    this.#yearOfManufacturing = val;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }
  set maxSpeed(val) {
    if (
      !Number.isFinite(val) ||
      val < 100 ||
      val > 300
    ) {
      throw new Error('Неправильная скорость')
    }
    this.#maxSpeed = val;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  set maxFuelVolume(val) {
    if (
      !Number.isFinite(val) ||
      val < 5 ||
      val > 20
    ) {
      throw new Error('Неправильная емкость')
    }
    this.#maxFuelVolume = val;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }
  set fuelConsumption(val) {
    if (
      !Number.isFinite(val) ||
      val <= 0
    ) {
      throw new Error('Неправильное потребление')
    }
    this.#fuelConsumption = val;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw Error('Машина уже заведена');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw Error('Машина ещё не заведена');
    }
    this.#isStarted = false;
  }

  fillUpGasTank(volume) {
    if (!Number.isFinite(volume) && volume <= 0) {
      throw new Error('Неверное количество топлива для заправки')
    }
    if (this.#currentFuelVolume + volume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен')
    }

    this.#currentFuelVolume += volume;
  }

  drive(speed, time) {
    if (!Number.isFinite(speed) || speed <= 0) {
      throw new Error('Неверная скорость');
    }
    if (!Number.isFinite(time) || time <= 0) {
      throw new Error('Неверное количество часов');
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    if (this.#fuelConsumption * speed * time / 100 > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }
    this.#currentFuelVolume -= this.#fuelConsumption * speed * time / 100;
    this.#mileage += speed * time;
  }


}

module.exports = Car;
