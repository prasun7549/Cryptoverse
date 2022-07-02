import { makeStyles } from "@material-ui/core";
import HomePage from "./pages/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";
import Alert from "./components/Alert";
import MetaPage from "./pages/MetaPage";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    
      <div className={classes.App}>
        <Header />
        <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/coins/:id" element={<CoinPage />}/>
        <Route path="/meta" element={<MetaPage />}/>
        
        </Routes>
        <Alert />
      </div>
  );
}

export default App;
