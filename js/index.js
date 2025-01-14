//? =========== Завдання 1 ===========//

logItems(['Mango', 'Poly', 'Ajax']);


function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  

  //? =========== Завдання 2 ===========//

  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' '); // Розбиваємо рядок на масив слів
    const totalWords = words.length;  // Підраховуємо кількість слів
    return totalWords * pricePerWord; // Обчислюємо загальну вартість
  }

  console.log(calculateEngravingPrice("Картина з гравіюванням", 10)); // 40
console.log(calculateEngravingPrice("Срібна прикраса", 5));         // 15

  //? =========== Завдання 3 ===========//

  function findLongestWord(string) {
    const words = string.split(' '); // Розбиваємо рядок на масив слів
    let longestWord = words[0];      // Припускаємо, що перше слово найдовше
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];      // Якщо знаходимо довше слово, оновлюємо змінну
      }
    }
  
    return longestWord;              // Повертаємо найдовше слово
  }
  

  console.log(findLongestWord("JavaScript найпопулярніша мова програмування")); // "програмування"
console.log(findLongestWord("Сьогодні гарна погода"));                        // "Сьогодні"


//? =========== Завдання 4 ===========//

function formatString(string) {
    if (string.length <= 40) {
      return string; // Повертаємо рядок без змін, якщо довжина не більше 40 символів
    } 
    return string.slice(0, 40) + '...'; // Обрізаємо рядок до 40 символів і додаємо '...'
  }
  
    console.log(formatString("Цей рядок має менше ніж сорок символів")); 
    // "Цей рядок має менше ніж сорок символів"

    console.log(formatString("Цей рядок набагато довший і містить більше сорока символів, тому його потрібно обрізати")); 
    // "Цей рядок набагато довший і містить бі..."


    //? =========== Завдання 4 ===========//

    function checkForSpam(message) {
        const lowerCaseMessage = message.toLowerCase(); // Перетворюємо рядок у нижній регістр
        return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
      }
      
    console.log(checkForSpam("Вигідна пропозиція! SALE зараз!")); // true

    console.log(checkForSpam("Реклама без спаму"));               // true

    console.log(checkForSpam("Ніякого спаму тут немає"));         // true
    
    console.log(checkForSpam("Звичайне повідомлення")); // false

     //? =========== Завдання 4 ===========//

     let numbers = [];       // Масив для збереження чисел
let total = 0;          // Змінна для підрахунку суми чисел

while (true) {
  let input = prompt("Введіть число (натисніть Cancel для завершення)"); // Запит на введення числа

  if (input === null) { // Перевіряємо, чи натиснув користувач Cancel
    break;              // Виходимо з циклу
  }

  input = Number(input); // Перетворюємо введене значення на число

  if (isNaN(input)) {    // Перевіряємо, чи введено коректне число
    alert("Було введено не число, спробуйте ще раз"); 
    continue;            // Переходимо до наступної ітерації циклу
  }

  numbers.push(input);   // Додаємо число до масиву
}

if (numbers.length > 0) { // Якщо масив не порожній
  for (let num of numbers) {
    total += num;        // Додаємо кожне число до total
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Масив порожній, немає чисел для підрахунку суми.");
}

