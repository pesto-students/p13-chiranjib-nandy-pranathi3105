class Shape {
calculateArea() {
        return 0; // Default implementation returns 0
    }
}
class Circle extends Shape {
    calculateArea(radius) {
        return Math.PI * radius * radius; // Calculate area of circle
    }
}
class Rectangle extends Shape {
    calculateArea(width, height) {
        return width * height; // Calculate area of rectangle
    }
}
class Triangle extends Shape {
    calculateArea(base,height) {
        return 0.5 * base * height; // Calculate area of triangle
    }
}

let cir = new Circle();
console.log("Area of Circle: " + cir.calculateArea(4))
let rect = new Rectangle()
console.log("Area of Rectangle: " + rect.calculateArea(12, 34))
let tri = new Triangle()
console.log("Area of Triangle: " + tri.calculateArea(5,9))
