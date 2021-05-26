import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState({title: "", messge: ""});

  const handleClearModal = () => {
    setError({
        title: "",
        message: ""
    });
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Name or Age is not filled"
      });
      return;
    }
    if (+enteredUserAge < 1) {
        setError({
            title: "Invalid Age",
            message: "Age has to be a positive number"
          });
      return;
    }
    console.log(enteredUsername, enteredUserAge);
    props.onAddUser(enteredUsername, enteredUserAge);
    setError({
        title: "",
        message: ""
    });
    setEnteredUsername("");
    setEnteredUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  return (
    <div>
    {error.title.length > 0 ? <ErrorModal clearModal={handleClearModal} title={error.title} message={error.message} /> :
      
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={userNameChangeHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
  }
    </div>
  );
};

export default AddUser;
