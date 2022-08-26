// client/src/components/App.js
import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { countState, currentUser } from "./recoil/atoms";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import TeamContainer from "./components/TeamContainer";
import PokedexContainer from "./components/PokedexContainer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DetailCard from "./components/DetailCard";
import MoveDetail from "./components/MoveDetail";
import { appTheme } from "./AppTheme";

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
    <ThemeProvider theme={appTheme}>
      <Router>
        <Box className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <Container maxWidth={"false"} sx={{ backgroundImage: "url('https://projectpokemon.org/home/uploads/monthly_2020_08/large.T00P01.gif.9ec92a831b7e411a89d5f9d96c4be296.gif')", backgroundSize: "cover", backgroundPosition: "center"}}>
                  <PokedexContainer />
                </Container>
              }
            />
            <Route
              path="/team"
              element={
                <Container maxWidth={"false"} sx={{ backgroundImage: "url('https://projectpokemon.org/home/uploads/monthly_2020_08/large.T00P01.gif.9ec92a831b7e411a89d5f9d96c4be296.gif')", backgroundSize: "cover", backgroundPosition: "center"}}>
                  <TeamContainer />
                </Container>
              }
            />
            <Route
              path="/login"
              element={
                <Container maxWidth={"false"} sx={{ backgroundImage: "url('https://projectpokemon.org/home/uploads/monthly_2020_08/large.T00P01.gif.9ec92a831b7e411a89d5f9d96c4be296.gif')", backgroundSize: "cover", backgroundPosition: "center"}}>
                  <Login setUser={setUser}/>
                </Container>
              }
            />
            <Route
              path="/signup"
              element={
                <Container maxWidth={"false"} sx={{ backgroundImage: "url('https://projectpokemon.org/home/uploads/monthly_2020_08/large.T00P01.gif.9ec92a831b7e411a89d5f9d96c4be296.gif')", backgroundSize: "cover", backgroundPosition: "center"}}>
                  <SignUp setUser={setUser}/>
                </Container>
              }
            />
            <Route 
              path="/details"
              element={
                <Container maxWidth={"false"} sx={{ backgroundImage: "url('https://projectpokemon.org/home/uploads/monthly_2020_08/large.T00P01.gif.9ec92a831b7e411a89d5f9d96c4be296.gif')", backgroundSize: "cover", backgroundPosition: "center"}}>
                  <DetailCard />
                </Container>
                  // <DetailCard />
              }
            />
            <Route 
              path="/move"
              element={
                <Container maxWidth={"false"} sx={{ backgroundImage: "url('https://projectpokemon.org/home/uploads/monthly_2020_08/large.T00P01.gif.9ec92a831b7e411a89d5f9d96c4be296.gif')", backgroundSize: "cover", backgroundPosition: "center", vh: 100}}>
                  <MoveDetail />
                </Container>
              }
            />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>

  );
}

export default App;