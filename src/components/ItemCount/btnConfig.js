
export const btnConfig = (cantidad, max) => {
  return {
    restar: {
      className: `btn`,
      disabled: cantidad === 0
    },
    sumar: {
      className: `btn`,
      disabled: cantidad === max
    }
  }
}