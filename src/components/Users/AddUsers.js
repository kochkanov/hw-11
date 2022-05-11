import styles from "./AddUsers.module.css";
import { Button } from "../UI/Button";
import Card from "../UI/Card";
import { useState } from "react";
import { ErrorModal } from "./ErrorModal";

export const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(false);

  const addUserHandler = (event) => { 
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values)"
      });
     
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age(>0)",
      });
    
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    // console.log(enteredUsername);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    // console.log(enteredAge);
  };

  const errorHandler = ()=>{
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName:</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add Users</Button>
      </form>
    </Card>
    </div>
  );
};
