import { validateEmptyProperties, ValidateEmptyPropertiesOutput } from "../src/validateEmptyProperties"

describe("Testando a função validateEmptyProperties", () => {
   test("Erro quando alguma chave é uma string vazia", () => {
      const result: ValidateEmptyPropertiesOutput = validateEmptyProperties({
         name: ""
      })

      expect(result.isValid).toBe(false)
      expect(result.errors).toHaveLength(1)
      expect(result.errors.length).toBe(1) // mesmo teste do de cima
      expect(result.errors).toContainEqual({
         key: "name",
         value: ""
      })
      // {} === {}
   })

   test("Erro quando alguma chave é zero", () => {
      const result: ValidateEmptyPropertiesOutput = validateEmptyProperties({
         age: 0
      })

      expect(result.isValid).toBe(false)
      expect(result.errors).toHaveLength(1)
      expect(result.errors.length).toBe(1) // mesmo teste do de cima
      expect(result.errors).toContainEqual({
         key: "age",
         value: 0
      })
      // {} === {}
   })

   test("Erro quando alguma chave é undefined", () => {
      const result: ValidateEmptyPropertiesOutput = validateEmptyProperties({
         name: undefined
      })

      expect(result.isValid).toBe(false)
      expect(result.errors).toHaveLength(1)
      expect(result.errors.length).toBe(1) // mesmo teste do de cima
      expect(result.errors).toContainEqual({
         key: "name",
         value: undefined
      })
      // {} === {}
   })

   test("Erro quando alguma chave é nula", () => {
      const result: ValidateEmptyPropertiesOutput = validateEmptyProperties({
         email: null
      })

      expect(result.isValid).toBe(false)
      expect(result.errors).toHaveLength(1)
      expect(result.errors.length).toBe(1) // mesmo teste do de cima
      expect(result.errors).toContainEqual({
         key: "email",
         value: null
      })
      // {} === {}
   })

   test("Erro quando uma chave é válida e várias são inválidas", () => {
      const result: ValidateEmptyPropertiesOutput = validateEmptyProperties({
         name: "",
         age: 0,
         email: undefined,
         password: null,
         id:"123-456"
      })

      expect(result.isValid).toBe(false)
      expect(result.errors).toHaveLength(4)
      expect(result.errors.length).toBe(4) // mesmo teste do de cima
   })

   test("Objeto válido", () => {
      const result: ValidateEmptyPropertiesOutput = validateEmptyProperties({
         name: "astrodev",
         age: 110,
         email: "Astrodev@gmail.com",
         password: "dfsdfdsfsdf",
         id:"123-456"
      })

      expect(result.isValid).toBe(true)
      expect(result.errors).toHaveLength(0)
      expect(result.errors.length).toBe(0) // mesmo teste do de cima
   })

   
})