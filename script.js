function toCase(str) {
  return str.toLowerCase() + "-" + str.toUpperCase();
}
// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
