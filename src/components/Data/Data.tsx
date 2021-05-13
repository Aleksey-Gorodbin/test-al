import React from "react";
import "./Data.css";

export const Data: React.FC<any> = (props) => {
  const [listTen, setListTen]: any = React.useState(false);
  const [listTwenty, setListTwenty]: any = React.useState(false);
  const [listThirty, setListThirty]: any = React.useState(false);
  const [listOther, setListOther]: any = React.useState(false);
  const [value, setValue]: any = React.useState('');
  const cardRef = React.useRef(null);

  function getDate(date: any) {
    const dateUtc = new Date(date);
    const year = dateUtc.getFullYear();
    const month = dateUtc.getMonth();
    const day = dateUtc.getDate();
    const dateISO = `${day}.${month + 1}.${year}`;
    return dateISO;
  }

  function handleChangeParam(e: any) {
    setValue(e.target.value);
    props.sortCards(e.target.value);
  }
  
  return (
    <div className="data">
      <input
        className="data__input"
        onChange={handleChangeParam}
        value={value}
        placeholder="Поиск"
      />
      <ul className="data__list">
        <li className="data__list-item">
          <p
            onClick={() => {
              if (props.cardsTen.length) {
                setListTen(!listTen);
              }
            }}
            className={`data__list-title ${
              props.cardsTen.length < 1 || listTen
                ? "data__list-title_disabled"
                : ""
            }`}
          >
            1-10
          </p>
          {!listTen && (
            <ul className="list-age">
              {props.cardsTen.map((card: any) => (
                <li onClick={() => props.addCard(card)} draggable="true" className="list-age__item" key={card.id.value}>
                  <img src={card.picture.thumbnail} />
                  <div className="list-age__description">
                    <p>{`${card.name.first} ${
                      card.name.last
                    }, дата регистрации: ${getDate(card.registered.date)}`}</p>
                    <p>{card.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="data__list-item">
          <p
            onClick={() => {
              if (props.cardsTwenty.length) {
                setListTwenty(!listTwenty);
              }
            }}
            className={`data__list-title ${
              props.cardsTwenty.length < 1 || listTwenty
                ? "data__list-title_disabled"
                : ""
            }`}
          >
            11-20
          </p>
          {!listTwenty && (
            <ul className="list-age">
              {props.cardsTwenty.map((card: any) => (
                <li onClick={() => props.addCard(card)} draggable="true" className="list-age__item" key={card.id.value}>
                  <img src={card.picture.thumbnail} />
                  <div className="list-age__description">
                    <p>{`${card.name.first} ${
                      card.name.last
                    }, дата регистрации: ${getDate(card.registered.date)}`}</p>
                    <p>{card.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="data__list-item">
          <p
            onClick={() => {
              if (props.cardsThirty.length) {
                setListThirty(!listThirty);
              }
            }}
            className={`data__list-title ${
              props.cardsThirty.length < 1 || listThirty
                ? "data__list-title_disabled"
                : ""
            }`}
          >
            21-30
          </p>
          {!listThirty && (
            <ul className="list-age">
              {props.cardsThirty.map((card: any) => (
                <li onClick={() => props.addCard(card)} draggable="true" className="list-age__item" key={card.id.value}>
                  <img src={card.picture.thumbnail} />
                  <div className="list-age__description">
                    <p>{`${card.name.first} ${
                      card.name.last
                    }, дата регистрации: ${getDate(card.registered.date)}`}</p>
                    <p>{card.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="data__list-item">
          <p
            onClick={() => {
              if (props.cardsOther.length) {
                setListOther(!listOther);
              }
            }}
            className={`data__list-title ${
              props.cardsOther.length < 1 || listOther
                ? "data__list-title_disabled"
                : ""
            }`}
          >
            31+
          </p>
          {!listOther && (
            <ul className="list-age">
              {props.cardsOther.map((card: any) => (
                <li ref={cardRef} onClick={() => props.addCard(card)} draggable="true" className="list-age__item" key={card.id.value}>
                  <img src={card.picture.thumbnail} />
                  <div className="list-age__description">
                    <p>{`${card.name.first} ${
                      card.name.last
                    }, дата регистрации: ${getDate(card.registered.date)}`}</p>
                    <p>{card.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Data;
