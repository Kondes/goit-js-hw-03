// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
//  Функция считает общую сумму запрплаты работников и возращает ее.
//  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function (employees) {
  let sum = 0;
  const employeesValues = Object.values(employees);

  for (const employe of employeesValues) {
    sum += employe;
  }
  return sum;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
