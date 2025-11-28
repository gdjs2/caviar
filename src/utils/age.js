export const catBirthday = new Date(2025, 4, 1); // May 1, 2025

/**
 * Calculate cat age string based on birthday and formatter
 * @param {Date} birthday
 * @param {Function} formatter Age formatting function
 * @returns string
 */
export function getCatAgeString(birthday, formatter) {
  const now = new Date();
  let years = now.getFullYear() - birthday.getFullYear();
  let months = now.getMonth() - birthday.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return formatter(years, months);
}
