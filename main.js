const inputDisplay = document.getElementById('input');

function appendToDisplay(input) {
  inputDisplay.value += input;
}

function appendToDisplaySignPlus(input) {
  inputDisplay.value += input;

  if (
    inputDisplay.value.length === 1 &&
    (inputDisplay.value[0] === '+' ||
      inputDisplay.value[0] === '-' ||
      inputDisplay.value[0] === '/' ||
      inputDisplay.value[0] === '*' ||
      inputDisplay.value[0] === '.')
  ) {
    inputDisplay.value[0] === '+';
  } else if (
    inputDisplay.value[inputDisplay.value.length - 2] === '-' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '+' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '*' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '/' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '.'
  ) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '+';
    inputDisplay.value = reAssignArray.join('');
  }
}

function appendToDisplaySignMinus(input) {
  inputDisplay.value += input;

  if (
    inputDisplay.value.length === 1 &&
    (inputDisplay.value[0] === '+' ||
      inputDisplay.value[0] === '-' ||
      inputDisplay.value[0] === '/' ||
      inputDisplay.value[0] === '*' ||
      inputDisplay.value[0] === '.')
  ) {
    inputDisplay.value[0] === '-';
  } else if (
    inputDisplay.value[inputDisplay.value.length - 2] === '-' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '+' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '*' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '/' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '.'
  ) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '-';
    inputDisplay.value = reAssignArray.join('');
  }
}

function appendToDisplaySignMultiply(input) {
  inputDisplay.value += input;

  if (
    inputDisplay.value.length === 1 &&
    (inputDisplay.value[0] === '+' ||
      inputDisplay.value[0] === '-' ||
      inputDisplay.value[0] === '/' ||
      inputDisplay.value[0] === '*' ||
      inputDisplay.value[0] === '.')
  ) {
    inputDisplay.value[0] === '*';
  } else if (
    inputDisplay.value[inputDisplay.value.length - 2] === '-' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '+' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '*' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '/' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '.'
  ) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '*';
    inputDisplay.value = reAssignArray.join('');
  }
}

function appendToDisplaySignDivide(input) {
  inputDisplay.value += input;

  if (
    inputDisplay.value.length === 1 &&
    (inputDisplay.value[0] === '+' ||
      inputDisplay.value[0] === '-' ||
      inputDisplay.value[0] === '/' ||
      inputDisplay.value[0] === '*' ||
      inputDisplay.value[0] === '.')
  ) {
    inputDisplay.value[0] === '/';
  } else if (
    inputDisplay.value[inputDisplay.value.length - 2] === '-' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '+' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '*' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '/' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '.'
  ) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '/';
    inputDisplay.value = reAssignArray.join('');
  }
}

function appendToDisplaySignDot(input) {
  inputDisplay.value += input;

  if (
    inputDisplay.value.length === 1 &&
    (inputDisplay.value[0] === '+' ||
      inputDisplay.value[0] === '-' ||
      inputDisplay.value[0] === '/' ||
      inputDisplay.value[0] === '*' ||
      inputDisplay.value[0] === '.')
  ) {
    inputDisplay.value[0] === '.';
  } else if (
    inputDisplay.value[inputDisplay.value.length - 2] === '-' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '+' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '*' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '/' ||
    inputDisplay.value[inputDisplay.value.length - 2] === '.'
  ) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '.';
    inputDisplay.value = reAssignArray.join('');
  }
}

//   function calculate () {
//     try {
//        const total = eval(inputDisplay.value);
//        inputDisplay.value = total;
//       }
//       catch(err) {
//         inputDisplay.value = 'Error';
//       }
//   };

function calculate() {
  const operationArray = inputDisplay.value.split('');
  let operationNumber = [];
  let num = '';

  for (let i = 0; i < operationArray.length; i++) {
    if (
      operationArray[i] === '+' ||
      operationArray[i] === '-' ||
      operationArray[i] === '*' ||
      operationArray[i] === '/'
    ) {
      operationNumber.push(num);
      operationNumber.push(operationArray[i]);
      num = '';
    } else {
      num += operationArray[i];
    }
  }

  if (num.length > 0) {
    operationNumber.push(num);
  }


  if (operationNumber[operationNumber.length - 1] === "."){
    
    inputDisplay.value =  inputDisplay.value;
    
  } else if (Number(operationNumber[operationNumber.length - 1])) {
    
    let newTotal = Number(operationNumber[0]);

    for (let j = 1; j < operationNumber.length; j++) {
      if (operationNumber[j] === '+') {
        newTotal += Number(operationNumber[j + 1]);
        j++;
      } else if (operationNumber[j] === '-') {
        newTotal -= Number(operationNumber[j + 1]);
        j++;
      } else if (operationNumber[j] === '/') {
        newTotal /= Number(operationNumber[j + 1]);
        j++;
      } else if (operationNumber[j] === '*') {
        newTotal *= Number(operationNumber[j + 1]);
        j++;
      }
    }

    inputDisplay.value = newTotal;
  };

};

function clearButton() {
  inputDisplay.value = '';
}
