import "./App.css";
import { AddUsers } from "./components/Users/AddUsers";
import { useState } from "react";
import { UsersList } from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={userList} onDelet={setUserList} />
    </div>
  );
}

export default App;
