const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];

function zipList(lett, num) {
  const data = [];
  for (let i = 0; i < num.length; i++) {
    data.push(lett[i], num[i]);
  }
  return data;
}

console.log(zipList(letters, numbers));

function zipListTheSimpleWay(lett, num) {
  return _.flatten(_.zip(lett, num));
}

console.log(zipListTheSimpleWay(letters, numbers));
