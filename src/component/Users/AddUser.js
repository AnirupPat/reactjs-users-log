import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState({ title: "", messge: "" });

  const handleClearModal = () => {
    setError({
      title: "",
      message: "",
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Name or Age is not filled",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age has to be a positive number",
      });
      return;
    }
    props.onAddUser(enteredName, enteredName);
    setError({
      title: "",
      message: "",
    });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <Wrapper>
      {error.title.length > 0 ? (
        <ErrorModal
          clearModal={handleClearModal}
          title={error.title}
          message={error.message}
        />
      ) : (
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef} />

            <label htmlFor="age">Age</label>
            <input id="age" type="number" ref={ageInputRef} />

            <Button type="submit">Add User</Button>
          </form>
        </Card>
      )}
    </Wrapper>
  );
};

export default AddUser;
