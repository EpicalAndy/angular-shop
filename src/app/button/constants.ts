export const constants: constantsType = {
  size: {
    default: {width: 'auto'},
    small: {width: 'auto'},
    large: {widht: '100%'}
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
