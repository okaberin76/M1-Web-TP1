// A `Circle` class/function that can be invoked as :
// const c = new Circle();
// It should contain at least 3 hidden fields `x`, `y`, and `radius`.
export class Circle {
  #x;
  #y;
  #radius;

  constructor(x = 0, y = 0, radius = 0) {
    this.#x = x;
    this.#y = y;
    this.#radius = radius;
    Object.freeze(this);
  }

  get coords() {
    return [this.#x, this.#y];
  }

  moveTo(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {throw  new Error('x and y should be numbers');}
    this.#x = x;
    this.#y = y;
  }

  get radius() {
    return this.#radius;
  }

  set radius(radius) {
    if (typeof radius !== 'number') {throw  new Error('radius should be a numbers');}
    if (radius < 0) {throw  new Error('radius should be a positive numbers');}
    this.#radius = radius;
  }

  get area() {
    return this.#radius * this.#radius * Math.PI;
  }

  set area(area) {
    if (typeof area !== 'number') {throw  new Error('area should be a numbers');}
    if (area < 0) {throw  new Error('area should be a positive numbers');}
    this.radius = Math.sqrt(area / Math.PI);
  }

  static distance(circle1, circle2) {
    const [x1, y1] = circle1.coords;
    const [x2, y2] = circle2.coords;
    const dx = x1- x2;
    const dy = y1- y2;

    return Math.sqrt(dx**2  +  dy**2);
    // sqrt ( ( x2 - x1) ^2   + (y2 - y1) ^2 )
  }

  static doIntersect(circle1, circle2) {
    return (circle1.radius + circle2.radius) > Circle.distance(circle1, circle2);
  }
}

/*
export class Circle2 extends Circle {
  #toto

  constructor(x, y, radius, toto) {
    super(x, y, radius);
    this.#toto = toto;
    Object.freeze(this);
  }

  get toto() {
    return this.#toto;
  }
}
 */
