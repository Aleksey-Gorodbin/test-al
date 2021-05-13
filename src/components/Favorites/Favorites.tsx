import React from "react";
import "./Favorites.css";

export const Favorites: React.FC<any> = (props) => {
  function getDate(date: any) {
    const dateUtc = new Date(date);
    const year = dateUtc.getFullYear();
    const month = dateUtc.getMonth();
    const day = dateUtc.getDate();
    const dateISO = `${day}.${month + 1}.${year}`;
    return dateISO;
  }

  return (
    <div className="favorites">
      <h2 className="favorites__title">Избранные</h2>
      <ul className="favorites__list">
        {props.cards.map((card: any) => (
          <li className="favorites__item" key={card.id.value}>
            <img src={card.picture.thumbnail} />
            <div className="favorites__item-description">
              <p>{`${card.name.first} ${
                card.name.last
              }, дата регистрации: ${getDate(card.registered.date)}`}</p>
              <p>{card.email}</p>
            </div>
            <button onClick={() => props.deleteCard(card)} className="favorites__btn">Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
