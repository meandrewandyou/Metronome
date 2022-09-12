import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Metronome from './components/Metronome';

function App() {

  const theme = createTheme({
    typography: {
    fontFamily: "Macondo, cursive",
    },
    link : {
      fontFamily: "Macondo, cursive",

    }
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Metronome/>

      </ThemeProvider>
    </div>
  );
}

export default App;
