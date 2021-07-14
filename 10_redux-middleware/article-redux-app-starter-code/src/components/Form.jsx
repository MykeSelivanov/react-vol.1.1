// Make sure handle user input and store articles in redux state
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveArticle } from "../redux/actions.js";

const ConnectedForm = () => {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(saveArticle(userInput));
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={userInput}
          onChange={handleUserInput}
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg">
        SAVE
      </button>
    </form>
  );
};
export default ConnectedForm;
