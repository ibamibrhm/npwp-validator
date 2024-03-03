function checksum(number: string, alphabet = '0123456789'): number {
  const n = alphabet.length;
  const reversedNumber = number.toString().split('').reverse().map(i => alphabet.indexOf(i));

  const sumOdd = reversedNumber.filter((_, index) => index % 2 === 0).reduce((acc, digit) => acc + digit, 0);
  const sumEven = reversedNumber.filter((_, index) => index % 2 !== 0).map(digit => {
    const [quotient, remainder] = [(digit * 2) / n | 0, (digit * 2) % n];
    return quotient + remainder;
  }).reduce((acc, digit) => acc + digit, 0);

  return (sumOdd + sumEven) % n;
}

function validate(number: string, alphabet = '0123456789'): string {
  if (!number) {
    throw new Error('InvalidFormat');
  }

  try {
    const valid = checksum(number, alphabet) === 0;
    if (!valid) {
      throw new Error('InvalidChecksum');
    }
    return number;
  } catch (error) {
    throw new Error('InvalidFormat');
  }
}

export default {
  validate,
  checksum,
}
