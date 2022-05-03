import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

export default function Deck({ id, name, description, cards }) {
  const studyPagePath = `/decks/${id}/study`;
  const history = useHistory();

  const handleDelete = (event) => {
    event.preventDefault();
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(id);
      history.go(0);
    }
  };

  return (
    <div className="card mb-2">
      <div className="d-flex justify-content-between">
        <h5 className="text-wrap mt-2 ml-2">{name}</h5>
        <p className="text-wrap mt-2 mr-2">{cards.length} cards</p>
      </div>
      <p className="ml-2">{description}</p>
      <div className="d-flex justify-content-between">
        <div>
          <Link
            className=" ml-2 mb-2 btn btn-secondary mr-2"
            to={`/decks/${id}`}
          >
            <span className="oi oi-eye"></span> View
          </Link>
          <Link className="btn btn-primary mr-2 mb-2" to={studyPagePath}>
            <span className="oi oi-book"></span> Study
          </Link>
        </div>
        <button onClick={handleDelete} className="mb-2 mr-2 btn btn-danger">
          <span className="oi oi-trash"></span>
        </button>
      </div>
    </div>
  );
}