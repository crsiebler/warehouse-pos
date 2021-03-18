import "./App.css";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <LandingPage />
    </StylesProvider>
  );
}

export default App;
