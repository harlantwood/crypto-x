// Actions
export const connectUport = (data) => {
  return {
    type: 'CONNECT_UPORT',
    data
  }
}

export const showLoggedInUser = (data) => {
  return {
    type: 'LOGIN_USER',
    data
  }
}
