export const getUsers = () => {
    return fetch('https://randomuser.me/api/?results=5000')
      .then((response) => response.json())
      .then((data) => {
          return data.results;
      })
  };