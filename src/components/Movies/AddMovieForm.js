import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function AddMovieForm(props) {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const movie = {
      title: title,
      openingText: openingText,
      releaseDate: releaseDate,
    };
    props.onAddMovie(movie);
  }

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function openingTextChangeHandler(event) {
    setOpeningText(event.target.value);
  }

  function releaseDateChangeHandler(event) {
    setReleaseDate(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="opening-text" className="form-label">Opening Text</label>
        <textarea
          id="opening-text"
          className="form-control"
          rows="5"
          value={openingText}
          onChange={openingTextChangeHandler}
        ></textarea>
      </div>
      <div>
        <label htmlFor="date" className="form-label">Release Date</label>
        <input
          type="text"
          id="date"
          className="form-control"
          value={releaseDate}
          onChange={releaseDateChangeHandler}
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
