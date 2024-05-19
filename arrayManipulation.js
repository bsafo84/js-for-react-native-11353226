function processArray(numbers) {

  return numbers.map(function (num) {
    if (num % 2 == 0) {
      return num * num;
    } else {
      return num * 3;
    }
  });
}

function formatArrayStrings(strings, numbers) {
  return strings.map(function (str, index) {
    if (numbers[index] % 2 === 0){
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}


const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
const strings = ['hello', 'world', 'javascript', 'is', 'fun'];
const formattedStrings = formatArrayStrings(strings, processedNumbers);