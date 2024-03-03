import luhn from '../utils/luhn';

function compact(npwpNumber: string): string {
  return npwpNumber.replace(/[ -.]/g, '').trim();
}

function validate(npwpNumber: string): string {
  npwpNumber = compact(npwpNumber);

  if (npwpNumber.length !== 15) {
    throw new Error('InvalidLength');
  }

  if (!/^\d+$/.test(npwpNumber)) {
    throw new Error('InvalidFormat');
  }

  luhn.validate(npwpNumber.slice(0, 9));

  return npwpNumber;
}

function is_valid(npwpNumber: string): boolean {
  try {
    validate(npwpNumber);
    return true;
  } catch (error) {
    return false;
  }
}

function format(npwpNumber: string): string {
  npwpNumber = compact(npwpNumber);
  return `${npwpNumber.slice(0, 2)}.${npwpNumber.slice(2, 5)}.${npwpNumber.slice(5, 8)}.${npwpNumber[8]}-${npwpNumber.slice(9, 12)}.${npwpNumber.slice(12)}`;
}

export default {
  compact,
  is_valid,
  format,
}
