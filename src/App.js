import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Chat from './Chat'
import Temp from './Temp'
import "./App.css"

import Joyride from 'react-joyride';

function App() {

  const state = {
    steps: [
      {
        target: '.my-first-step',
        content: 'This is my awesome feature!',
      },
      {
        target: '#tempId',
        content: 'This is important!',
      },
      {
        target: '.my-other-step',
        content: 'This another awesome feature!',
      },
      {
        target: '#myId',
        content: 'This another another awesome feature!',
      },
    ],
  };
  const {steps} = state;

  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  return (

    <ThemeProvider theme={darkTheme}>
      <Joyride 
        steps = {steps}
      />
      {/* <Temp /> */}
      {/* <Chat /> */}
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <div className="my-first-step">
          This is first step
        </div>

        {/* <Navbar /> */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
        <div className="my-other-step">
          This is my second step
        </div>
        <div className="my-other-step">
          This is my second step
        </div>
        <div className="my-other-step">
          This is my second step
        </div>
        <div className="my-other-step">
          This is my second step
        </div>
        <div className="my-other-step-2" id="myId">
          This is last step
        </div>
    </ThemeProvider>
  );
}

export default App;
