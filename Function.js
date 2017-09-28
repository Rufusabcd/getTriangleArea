function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
          return 'Nieprawidłowe dane';
        }
  else {
    return a*h/2;
  }
console.log(getTriangleArea(10, 6))

var traingle1Area = getTriangleArea(9, 6)
var traingle2Area = getTriangleArea(10, 20)
var traingle3Area = getTriangleArea(8, 12)