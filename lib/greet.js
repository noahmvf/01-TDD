const greet = module.exports = (string) => {
  if (typeof string === 'string'){
    return `hello ${string}`;
  }
  if (typeof string !== 'string') {
    return null;
  }
}