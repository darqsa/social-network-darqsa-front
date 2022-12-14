import UserList from "./components/UserList/UsersList";
import { useDispatch } from "react-redux";
import { fetchToken } from "./utils/auth";
import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "./users/models/User";
import { loginUserActionCreator } from "./users/slices/loginUserSlice";
import Login from "./components/Login/Login";
import { MainAppContainerStyled } from "./AppStyled";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if (token) {
    const user = fetchToken(token);
    dispatch<PayloadAction<User>>(loginUserActionCreator(user));
  }

  return (
    <>
      <header>
        <h1 className="app-header">Tinder🔥</h1>
      </header>
      <MainAppContainerStyled className="app-container">
        <div>
          <Login />
        </div>
        <UserList />
      </MainAppContainerStyled>
    </>
  );
}

export default App;
