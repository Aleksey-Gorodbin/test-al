import React from "react";
import "./App.css";
import { Data } from "../Data/Data";
import { Favorites } from "../Favorites/Favorites";
import { getUsers } from "../../utils/api";
import { CurrentUserContext } from "../../context/context";

export const App: React.FC = () => {
  const [currentUser, setCurrentUser]: any = React.useState([]);
  const [sortArr, setSortArr]: any = React.useState([]);
  const [favoriteArr, setFavotitetArr]: any = React.useState([]);
  const [spinner, setSpinner]: any = React.useState(true);
  const [fullArr, setFullArr]: any = React.useState(true);
  //const [user, setUser]: any = React.useState({});

  React.useEffect(() => {
    getUsers()
      .then((res) => {
        setCurrentUser(res);
        console.log(res);
        setSpinner(false);
        return;
      })
      .catch((err) => console.log(err));
  }, []);

  function sortCards(value: any) {
    if (value.length > 0) {
      setFullArr(false);
      const filterArr = currentUser.filter((item: any) => {
        return (
          item.name.first.toLowerCase().startsWith(value) ||
          item.name.last.toLowerCase().startsWith(value)
        );
      });
      setSortArr(filterArr);
    } else {
      setFullArr(true);
    }
  }

  function addCard(user: any) {
    if (favoriteArr.find((item:any) => item.id.value === user.id.value)) {
      return;
    }
    let ddd = favoriteArr;
    ddd.push(user);
    setFavotitetArr(ddd);
    console.log(favoriteArr);
  }

  function deleteCard(user: any) {
    const newCards = favoriteArr.filter(function (c:any) {
      return c.id.value !== user.id.value;
    });
    setFavotitetArr(newCards);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={fullArr ? currentUser : sortArr}>
        <h1>List of users</h1>
        {spinner ? (
          <div className="spinner-wrap">
            <span className="spinner"></span>
          </div>
        ) : (
          <main className="App__content">
            <Data
              addCard={addCard}
              sortCards={sortCards}
              cardsTen={(fullArr ? currentUser : sortArr).filter((item: any) => {
                return item.registered.age < 11;
              })}
              cardsTwenty={(fullArr ? currentUser : sortArr).filter((item: any) => {
                return item.registered.age > 10 && item.registered.age < 21;
              })}
              cardsThirty={(fullArr ? currentUser : sortArr).filter((item: any) => {
                return item.registered.age > 20 && item.registered.age < 31;
              })}
              cardsOther={(fullArr ? currentUser : sortArr).filter((item: any) => {
                return item.registered.age > 30;
              })}
            />
            <Favorites deleteCard={deleteCard} cards={favoriteArr} />
          </main>
        )}
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
