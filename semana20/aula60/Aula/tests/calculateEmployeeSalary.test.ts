import { calculateEmployeeSalary } from "../src/calculateEmployeeSalary"
import { validateEmptyProperties } from "../src/validateEmptyProperties"
import { employeeMock } from "./mocks/employeeMock"
import { validatorMockFailure, validatorMockSuccess } from "./mocks/validatorMock"

test("Erro ao passar uma chave indefinida", ()=>{
   expect.assertions(1)

   try {
      const salary = calculateEmployeeSalary(
         employeeMock,
         validatorMockFailure
      )
   } catch (error) {
      expect(error.message).toBe("Missing Properties")
   }
})

test("Erro ao passar um salário base negativo", ()=>{
   expect.assertions(2)

   try {
      const salary = calculateEmployeeSalary(
         {...employeeMock, baseSalary: -10},
         validatorMockSuccess
      )
   } catch (error) {
      expect(error.message).toBe("Invalid BaseSalary")
      expect(validatorMockSuccess).toHaveBeenCalledTimes(1)
   } 
})

test("Input válido", ()=>{
   const salary = calculateEmployeeSalary(
      employeeMock,
      validatorMockSuccess// ()=>{}
   )

   expect(salary).toBeGreaterThan(10)
   expect(validatorMockSuccess).toHaveBeenCalled()
   expect(validatorMockSuccess).toHaveBeenCalledWith(employeeMock)
   expect(validatorMockSuccess).toHaveReturned()
})