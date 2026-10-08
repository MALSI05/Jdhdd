// ПРАКТИЧЕСКИЕ ЗАДАНИЯ ПО JAVASCRIPT №11–26

// 11. Определение температуры
function getTemperatureMessage(temperature) {
    if (temperature < 0) return "Очень холодно";
    else if (temperature <= 15) return "Прохладно";
    else if (temperature <= 25) return "Тепло";
    else return "Жарко";
}
let temperature = 18;
console.log("=== Задание 11 ===");
console.log(temperature + "°C:", getTemperatureMessage(temperature));
console.log("-10°C:", getTemperatureMessage(-10));
console.log("5°C:", getTemperatureMessage(5));
console.log("20°C:", getTemperatureMessage(20));
console.log("35°C:", getTemperatureMessage(35));

// 12. Проверка логина
let login = "student";
console.log("\n=== Задание 12 ===");
if (login === "admin") console.log("Добро пожаловать!");
else console.log("Неверный логин");

// 13. Максимальное число
function findMax(a, b, c) {
    if (a >= b && a >= c) return a;
    else if (b >= a && b >= c) return b;
    else return c;
}
let maxA = 12, maxB = 25, maxC = 18;
console.log("\n=== Задание 13 ===");
console.log("Максимальное число:", findMax(maxA, maxB, maxC));
console.log("Проверка 20, 20, 15:", findMax(20, 20, 15));

// 14. Стоимость билета
function getTicketPrice(age) {
    if (age < 7) return "Бесплатно";
    else if (age <= 17) return "500 ₸";
    else if (age <= 59) return "1000 ₸";
    else return "600 ₸";
}
let ticketAge = 20;
console.log("\n=== Задание 14 ===");
console.log("Возраст:", ticketAge);
console.log("Стоимость:", getTicketPrice(ticketAge));

// 15. День недели
let day = 3;
console.log("\n=== Задание 15 ===");
switch (day) {
    case 1: console.log("Понедельник"); break;
    case 2: console.log("Вторник"); break;
    case 3: console.log("Среда"); break;
    case 4: console.log("Четверг"); break;
    case 5: console.log("Пятница"); break;
    case 6: console.log("Суббота"); break;
    case 7: console.log("Воскресенье"); break;
    default: console.log("Неверный номер дня");
}

// 16. Сумма чисел от 1 до 100
let sum = 0;
for (let i = 1; i <= 100; i++) sum += i;
console.log("\n=== Задание 16 ===");
console.log("Сумма:", sum);

// 17. Чётные числа от 1 до 30
let evenCount = 0;
console.log("\n=== Задание 17 ===");
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
        evenCount++;
    }
}
console.log("Количество:", evenCount);

// 18. Средний балл
let grades = [85, 90, 78, 92, 88];
let gradesSum = 0;
for (let i = 0; i < grades.length; i++) gradesSum += grades[i];
let averageGrade = gradesSum / grades.length;
console.log("\n=== Задание 18 ===");
console.log("Средний балл:", averageGrade);
if (averageGrade > 80) console.log("Средний балл превышает 80");
else console.log("Средний балл не превышает 80");

// 19. Самый дорогой товар
let prices = [1500, 3500, 2200, 7000, 4100];
let maxPrice = prices[0];
for (let i = 1; i < prices.length; i++) {
    if (prices[i] > maxPrice) maxPrice = prices[i];
}
console.log("\n=== Задание 19 ===");
console.log("Самая высокая цена:", maxPrice + " ₸");

// 20. Обратный отсчёт
console.log("\n=== Задание 20 ===");
let countdown = 10;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
console.log("Старт!");

// 21. Электронная очередь
let queue = [101, 102, 103, 104, 105];
console.log("\n=== Задание 21 ===");
for (let i = 0; i < queue.length; i++) {
    console.log("Приглашается студент №" + queue[i]);
}
console.log("Очередь завершена");

// 22. Проверка доступа
let role = "teacher";
let hasPass = false;
console.log("\n=== Задание 22 ===");
if (role === "teacher") {
    console.log("Доступ разрешён");
} else if (role === "student" && hasPass === true) {
    console.log("Доступ разрешён");
} else if (role === "student" && hasPass === false) {
    console.log("Доступ запрещён");
} else {
    console.log("Обратитесь к администратору");
}

// 23. Расчёт заработной платы
let salary = 200000;
let bonusPercent;
if (salary < 150000) bonusPercent = 20;
else if (salary < 300000) bonusPercent = 15;
else bonusPercent = 10;
let bonus = salary * bonusPercent / 100;
let totalSalary = salary + bonus;
console.log("\n=== Задание 23 ===");
console.log("Базовая зарплата:", salary + " ₸");
console.log("Премия:", bonus + " ₸");
console.log("Общая сумма:", totalSalary + " ₸");

// 24. Учёт посещаемости
let attendance = [true, true, false, true, false, true, true, true];
let present = 0, absent = 0;
for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) present++;
    else absent++;
}
let attendancePercent = present / attendance.length * 100;
console.log("\n=== Задание 24 ===");
console.log("Присутствуют:", present);
console.log("Отсутствуют:", absent);
console.log("Процент посещаемости:", attendancePercent + "%");

// 25. Мини-банкомат
let balance = 100000;
let pin = 1234;
let enteredPin = 1234;
let amount = 25000;
console.log("\n=== Задание 25 ===");
if (enteredPin !== pin) {
    console.log("Ошибка: неправильный PIN-код");
} else if (amount <= 0) {
    console.log("Некорректная сумма");
} else if (amount > balance) {
    console.log("Недостаточно средств");
} else {
    balance -= amount;
    console.log("Операция выполнена успешно");
    console.log("Снято:", amount + " ₸");
    console.log("Новый баланс:", balance + " ₸");
}

// Дополнительное задание 26. Интерактивный калькулятор
function interactiveCalculator() {
    let a = Number(prompt("Введите первое число:"));
    let b = Number(prompt("Введите второе число:"));
    let operation = prompt("Выберите: +, -, *, /");

    if (Number.isNaN(a) || Number.isNaN(b)) {
        alert("Ошибка: введите числа.");
        return;
    }

    let result;
    switch (operation) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/":
            if (b === 0) {
                alert("Ошибка: деление на ноль невозможно.");
                return;
            }
            result = a / b;
            break;
        default:
            alert("Ошибка: неизвестная операция.");
            return;
    }
    alert("Результат: " + result);
}

console.log("\n=== Дополнительное задание 26 ===");
interactiveCalculator();
