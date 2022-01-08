import "./styles.css";
import {
  Button,
  Container,
  Box,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Modal,
  Paper,
  Grid
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  paper: {
    height: "10rem",
    margin: "2rem",
    padding: "1rem",
    backgroundColor: theme.palette.primary.main
  }
}));
export default function App() {
  const classes = useStyle();
  return (
    <Container className={classes.paper} maxWidth="xl" className="App">
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={4} xl={3} item>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid xs={12} md={6} lg={4} xl={3} item>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid xs={12} md={6} lg={4} xl={3} item>
          <Paper className={classes.paper}>3</Paper>
        </Grid>
        <Grid xs={12} md={6} lg={4} xl={3} item>
          <Paper className={classes.paper}>4</Paper>
        </Grid>
      </Grid>
      <Example />
    </Container>
  );
}

const Example = () => {
  const [state, setState] = useState(false);
  const [select, setSelect] = useState(1);
  const classes = useStyle();
  return (
    <>
      <Modal
        open={state}
        onClose={() => {
          setState(false);
        }}
      >
        <Paper className={classes.paper}>
          <Box>Modal</Box>
        </Paper>
      </Modal>
      <Box>
        <Button>Hello</Button>
      </Box>
      <Box>
        <TextField
          label="Name"
          placeholder="Enter Something"
          variant="filled"
        />
      </Box>
      <Box mt={5} py={10}>
        <Checkbox
          checked={state}
          onClick={() => {
            setState(!state);
          }}
          color="secondary"
        />
      </Box>
      <Box>
        <Select
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          label="Value"
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
      </Box>
      <Button variant="outlined">Hello</Button>
      <Button variant="contained">Hello</Button>
      <Button
        startIcon={<UploadIcon />}
        endIcon={<UploadIcon />}
        size="large"
        variant="contained"
      >
        Hello
      </Button>
    </>
  );
};
