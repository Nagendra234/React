const storeUserDetails = (data) => {
    sessionStorage.setItem('token', data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));
  }

export default storeUserDetails
