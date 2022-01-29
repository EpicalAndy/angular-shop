export const constants: constantsType = {
  size: {
    default: 'auto',
    small:  'auto',
    large:  '50%'
  },
  color: {
    default: 'gray',
    primary: 'blue',
    accent: 'green',
    warning: 'red'
  }
}

export type constantsType = {
  size: any,
  color: any
}
