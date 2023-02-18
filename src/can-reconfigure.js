function canReConfigure(from, to) {
  //if (!from) throw new Error('from is required');
  if (typeof from !== 'string') throw new Error('from is not a string');
  if (typeof to !== 'string') throw new Error('to is not a string');

  const isSameLeght = from.length === to.length;
  if (!isSameLeght) return false;

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) return false;

  const trasnformations = {};
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    console.log(
      '🚀 ~ file: can-reconfigure.js:15 ~ canReConfigure ~ fromLetter',
      fromLetter
    );
    const toLetter = to[i];
    console.log(
      '🚀 ~ file: can-reconfigure.js:17 ~ canReConfigure ~ toLetter',
      toLetter
    );
    const storedLetter = trasnformations[fromLetter];
    console.log(
      '🚀 ~ file: can-reconfigure.js:25 ~ canReConfigure ~ storedLetter',
      storedLetter
    );
    if (storedLetter && storedLetter !== toLetter) return false;
    trasnformations[fromLetter] = toLetter;
    console.table(trasnformations);
  }

  return true;
}

module.exports = canReConfigure;
