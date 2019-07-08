const splitPuzzle = question => {
  let puzzle = question.split('\n').slice(2, 6);
  return puzzle.map( letter => letter.slice(1,5));
}

const handleOddPos = result => {
  let positions = result.map(( letter ) => {
    return letter.split('').findIndex((char, index) =>{
        return char !== '-';
    });
  })
  let oddPosition = positions.find(element => {
    return element !== positions[0] && element !== positions[1]
  })
  let oddIndex = positions.indexOf(oddPosition);
  return result.map(( letter, letIndex ) => {
    const oddLetter = result[oddIndex].split('').map(( char, index ) => {
      return '>'
    }).join('');
    return letIndex === oddIndex ? oddLetter : letter;
  });
}

const handleLeft = result => {
  return result.map(letter => {
    if (letter.includes('<')) {
      return letter.replace(/-/g, '<')
    } else {
      return letter
    }
  })
}

const handleEquals = ( result, puzzle ) => {

}

const setEquals = result => {
  return result.map(( letter, letIndex ) => {
    return letter.split('').map((char, charIndex) => {
      return charIndex === letIndex ? '=' : char
    }).join('');
  })
}

const handleJoin = result => {
  let answer = ['  ABCD'];
  result.forEach(( letter, index ) => {
    answer.push(['A', 'B', 'C', 'D'][index] + letter)
  })
  return answer.join('\n')
}

const puzzleFunc = question => {
  const puzzle = splitPuzzle(question);
  console.log(puzzle)
  let result = [ ...puzzle];
  result = handleOddPos(result);
  result = handleLeft(result);
  result = setEquals(result);
  result = handleJoin(result);
  console.log(result);
  return result;
}

module.exports = puzzleFunc;
