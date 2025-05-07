function formatString(input: string, toUpper?: boolean): string {
  if (toUpper == true || toUpper == undefined) {
    return input?.toUpperCase();
  } else {
    return input?.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((prev) => prev.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => {
    return [...acc, ...curr];
  });
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

function processValue(value: string | number): number {
  if (typeof value == "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (!products.length) return null;
  return products.reduce((expensiveProduct, currentProduct) => {
    return expensiveProduct.price > currentProduct.price
      ? expensiveProduct
      : currentProduct;
  });
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  if (day == Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (n >= 0) {
        resolve(n * n);
      } else {
        rejected("Error: Negative number not allowed");
      }
    }, 1000);
  });
}
