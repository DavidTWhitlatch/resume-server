const splitPuzzle = (question) => {
  const puzzle = question.split('\n').slice(2, 6);
  return puzzle.map(letter => letter.slice(1, 5));
};

const oddPositions = (result) => {
  const positions = result.map((letter) => {
    return letter.split('').findIndex((char) => {
      return char !== '-';
    });
  });
  let counter1, counter2, index1, index2, oddIndex;
  counter1 = counter2 = index1 = oddIndex = 0;
  positions.forEach((element, index) => {
    if (element !== positions[0]) {
      index2 = index;
      counter2 += 1;
    } else {
      index1 = index;
      counter1 += 1;
    }
  });
  oddIndex = counter2 > counter1 ? index1 : index2;
  return { positions, oddIndex };
};

const handleOddPos = (result) => {
  const { positions, oddIndex } = oddPositions(result);
  const oddLetter = result[oddIndex].split('').map(() => '>').join('');
  return result.map((letter, letIndex) => {
    return letIndex === oddIndex ? oddLetter : letter;
  });
};

const handleRight = (result, puzzle) => {
  const { oddIndex } = oddPositions(puzzle);
  let rightRight;
  puzzle.forEach((letter, index) => {
    if (letter.includes('>') && index !==oddIndex) {
      rightRight = index;
    }
  })
  const swapLetters = puzzle.filter((letter, index) => {
    return !letter.includes('=') && index !== rightRight;
  });
  const swapChars = swapLetters.map((letter) => {
    return letter.split('').filter(char => char !== '-').join('');
  });
  console.log(swapChars);
  return result.map((letter) => {
    let counter = swapChars.length - 1;
    return letter.split('').map((char) => {
      let newChar;
      if (char === '-') {
        newChar = swapChars[counter];
        console.log(newChar, counter)
        console.log(letter)
        counter -= 1;
      } else {
        newChar = char;
      }
      return newChar;
    }).join('');
  });
}

const handleLeft = (result) => {
  return result.map((letter) => {
    return letter.includes('<') ? letter.replace(/-/g, '<') : letter;
  });
};

const handleEquals = (result, puzzle) => {
  const puzzleString = puzzle.reduce((string, letter) => {
    return string + letter;
  }).replace(/-/g, '');
  const reversedArray = puzzleString.split('').map((char) => {
    return char === '<' ? '>' : '<';
  });
  const answer = [];
  puzzle.forEach((letter, index) => {
    if (letter.includes('=')) {
      let temp = '';
      let counter = 0;
      result[index].split('').forEach((char) => {
        if (char === '-') {
          temp += reversedArray[counter];
        } else {
          temp += char;
        }
        counter += 1;
      });
      answer.push(temp);
    } else {
      answer.push(result[index]);
    }
  });
  return answer;
};

const setEquals = (result) => {
  return result.map((letter, letIndex) => {
    return letter.split('').map((char, charIndex) => {
      return charIndex === letIndex ? '=' : char;
    }).join('');
  });
};

const handleJoin = (result) => {
  const answer = [' ABCD'];
  result.forEach((letter, index) => {
    answer.push(['A', 'B', 'C', 'D'][index] + letter);
  });
  return answer.join('\n');
};

const puzzleFunc = (question) => {
  const puzzle = splitPuzzle(question);
  let result = [...puzzle];
  result = handleOddPos(result);
  result = handleLeft(result);
  result = setEquals(result);
  result = handleEquals(result, puzzle);
  result = handleRight(result, puzzle);
  result = handleJoin(result);
  return result;
};

module.exports = puzzleFunc;
