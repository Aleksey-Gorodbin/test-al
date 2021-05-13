export const getUsers = () => {
    //?results=5000
    return fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
          return data.results;
      })
  };