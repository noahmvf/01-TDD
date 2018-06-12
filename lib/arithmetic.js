const arithmetic = module.exports = {};

arithmetic.add = (num1, num2) => {
  if (typeof num1 === NaN|| typeof num2 === NaN) {
    return null;
  } else {
    return num1 + num2;
  }
}

arithmetic.sub = (num1, num2) => {
  if (typeof num1 === NaN|| typeof num2 === NaN) {
    return null;
  } else {
    return num1 - num2;
  }
}