// client/src/components/App.js
import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { countState, currentUser } from "./recoil/atoms";
import { Box, Container } from "@mui/material";
import NavBar from "./components/NavBar";
import TeamContainer from "./components/TeamContainer";
import PokedexContainer from "./components/PokedexContainer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {

  // const [user, setUser] = useRecoilState(currentUser)
  const setUser = useSetRecoilState(currentUser)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => {
          // console.log(user)
          setUser(user)
        });
      }
    });
  }, []);
  


  return (

    <Router>
      <Box className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Container maxWidth={"false"}>
                <PokedexContainer />
              </Container>
            }
          />
          <Route
            path="/team"
            element={
              <Container maxWidth={"false"}>
                <TeamContainer />
              </Container>
            }
          />
          <Route
            path="/login"
            element={
              <Container maxWidth={"false"}>
                <Login setUser={setUser}/>
              </Container>
            }
          />
          <Route
            path="/signup"
            element={
              <Container maxWidth={"false"}>
                <SignUp setUser={setUser}/>
              </Container>
            }
          />
        </Routes>
      </Box>
    </Router>

  );
}

export default App;