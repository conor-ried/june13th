import React from "react";
import axios from "axios";
import uuid from "uuid";
import  useAxios  from "./hooks/useAxios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
const url = "https://deckofcardsapi.com/api/deck/new/draw/";




function CardTable() {
  const { data, isLoading, addData } = useAxios(url);

  const addCard = async () => {
    const response = await axios.get(url);
    const newData = { ...response.data, id: uuid() };
    addData(newData);
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;