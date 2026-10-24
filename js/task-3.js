/* Функція checkForSpam очікує один параметр message — рядок повідомлення. 
Слова в рядку можуть бути в довільному регістрі, наприклад SPAM або sAlE.

Доповни функцію так:
Якщо в message знайдено заборонене слово spam або sale, функція повертає логічне значення true.
Якщо заборонених слів немає, функція повертає логічне значення false.

/* Code */
function checkForSpam(message) {
  if (
    message.toLowerCase().includes(`spam`) ||
    message.toLowerCase().includes(`sale`)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true */
