import Grid from "@mui/material/Grid";
import "./App.css";
import Header from "./Container/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <Grid>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Contact />
    </Grid>
  );
}

export default App;
