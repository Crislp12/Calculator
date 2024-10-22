const inputDisplay = document.getElementById('input');

function appendToDisplay(input) {
  inputDisplay.value += input;
}

const operators = ['-', '+', '*', '/', '.'];

function appendToDisplaySignPlus(input) {
  inputDisplay.value += input;
  const secondLastChar = inputDisplay.value[inputDisplay.value.length - 2];

  if ( inputDisplay.value.length === 1 && operators.includes(inputDisplay.value[0])) {
    inputDisplay.value[0] === '+';
  } else if (operators.includes(secondLastChar)) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '+';
    inputDisplay.value = reAssignArray.join('');
  };
};

function appendToDisplaySignMinus(input) {
  inputDisplay.value += input;
  const secondLastChar = inputDisplay.value[inputDisplay.value.length - 2];

  if ( inputDisplay.value.length === 1 && operators.includes(inputDisplay.value[0])) {
    inputDisplay.value[0] === '-';
  } else if (operators.includes(secondLastChar)) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '-';
    inputDisplay.value = reAssignArray.join('');
  };
};

function appendToDisplaySignMultiply(input) {
  inputDisplay.value += input;
  const secondLastChar = inputDisplay.value[inputDisplay.value.length - 2];

  if ( inputDisplay.value.length === 1 && operators.includes(inputDisplay.value[0])) {
    inputDisplay.value[0] === '*';
  } else if (operators.includes(secondLastChar)) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '*';
    inputDisplay.value = reAssignArray.join('');
  };
}

function appendToDisplaySignDivide(input) {
  inputDisplay.value += input;
  const secondLastChar = inputDisplay.value[inputDisplay.value.length - 2];

  if ( inputDisplay.value.length === 1 && operators.includes(inputDisplay.value[0])) {
    inputDisplay.value[0] === '/';
  } else if (operators.includes(secondLastChar)) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '/';
    inputDisplay.value = reAssignArray.join('');
  };
};

function appendToDisplaySignDot(input) {
  inputDisplay.value += input;
  const secondLastChar = inputDisplay.value[inputDisplay.value.length - 2];

  if ( inputDisplay.value.length === 1 && operators.includes(inputDisplay.value[0])) {
    inputDisplay.value[0] === '.';
  } else if (operators.includes(secondLastChar)) {
    const reAssignArray = inputDisplay.value.split('');
    reAssignArray.pop();
    reAssignArray[reAssignArray.length - 1] = '.';
    inputDisplay.value = reAssignArray.join('');
  };
};

 

function clearButton() {
  inputDisplay.value = '';
}
