import Grid from "@mui/material/Grid";
import "./App.css";
import Header from "./Container/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";

function App() {
  return (
    <Grid>
      <Header />
      <HeroSection />
      <About />
    </Grid>
  );
}

export default App;
