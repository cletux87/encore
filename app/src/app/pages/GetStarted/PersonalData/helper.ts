/**
 * Verify if the date has a correct format
 * we have this function in order to use getAge later on
 * @param date date as string
 * @returns - boolean value true if it is a valid date
 */
export const isDateValid = (date: string) => {
  const dateD = Date.parse(date);
  return !isNaN(dateD);
};

/**
 * Get age of a person
 * @param birthDate: is a string value and we assume it has the  correct format
 * return - age value compared from today
 */
export const getAge = (birthDate: string) => {
  const birthDateAsDate = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birthDateAsDate.getFullYear();
  const month = today.getMonth() - birthDateAsDate.getMonth();
  if (month < 0) {
    age--;
  } else if (month === 0 && today.getDate() < birthDateAsDate.getDate()) {
    age--;
  }

  return age;
};
