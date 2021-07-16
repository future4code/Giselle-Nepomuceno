import { calculateEmployeeSalary } from "./calculateEmployeeSalary";
import { validateEmptyProperties } from "./validateEmptyProperties";

// const result = validateEmptyProperties({
//    name: "Mateus",
//    age: 10
// })

// console.log({ result });

const salary = calculateEmployeeSalary(
   {
      employeeName: "Bob",
      baseSalary: 1000,
      benefits: [10, 100],
      extraHours: 0,
   },
   validateEmptyProperties
)
console.log({ salary });