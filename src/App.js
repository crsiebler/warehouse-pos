import "./styles/main.css";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DisplayProvider } from "./context/displayContext";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <StylesProvider injectFirst>
      <DisplayProvider>
        <CssBaseline />
        <LandingPage />
      </DisplayProvider>
    </StylesProvider>
  );
}

export default App;
