import "./App.css";
import { Box, Paper, Typography, Button } from "@mui/material";
import "./reset.css";
import repairs from "./icons/repairs.svg";
import design from "./icons/design.svg";

function App() {
  return (
    <Box className="App">
      <Box className="App-header">
        <Typography  variant="h3">WALTEX</Typography>
        <Typography>Ryszard Kurowski</Typography>
      </Box>
      <Box className="form">
        <Paper className="repairs-form">
          <img className="repairs-image" src={repairs}></img>

          <Box className="repairs-text">
            <Typography variant="h5">REPAIRS</Typography>
            <Typography variant="h6">
              Serving housing associations, developers and local authorities
              throughout the UK, we manage and deliver everything from one-off
              painting projects to major cyclical decoration programmes. We are
              well equipped to deliver large scale / long term framework
              agreements and our teams are highly trained in terms of materials,
              working practices, safety and quality control.
            </Typography>
            <Button
              size="large"
              variant="contained"
              href="https://buy.stripe.com/5kAdUQ5612CN9CUfZ7"
              target={"_blank"}
              
            >
              Order
            </Button>
          </Box>
        </Paper>
        <Paper className="design-form">
          <img className="repairs-image" src={design}></img>

          <Box className="repairs-text">
            <Typography variant="h5">INTERIOR DESIGN</Typography>
            <Typography variant="h6">
              Bring your dream home to life with one-on-one design help &
              hand-picked products tailored to your style, space, and
              budget.Have big dreams for your space? Share your inspiration,
              goals, and budget and we’ll help you design a space you love.
            </Typography>
            <Button
              size="large"
              variant="contained"
              href="https://buy.stripe.com/3cs9EA7e9a5fg1icMW"
              target={"_blank"}
            >
              Order
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
