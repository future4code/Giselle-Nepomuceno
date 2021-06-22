export const validatorMockSuccess = jest.fn(() => {
   return {
      isValid: true,
      errors: []
   }
})

export const validatorMockFailure = jest.fn(() => {
   return {
      isValid: false,
      errors: [{
         key: "name",
         value: "undefined"
      }]
   }
})