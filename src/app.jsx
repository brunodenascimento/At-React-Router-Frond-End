import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Site
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Seja bem-vindo
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Teste
          </Typography>
          <Button variant="contained" color="primary">
            Clique Aqui
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
