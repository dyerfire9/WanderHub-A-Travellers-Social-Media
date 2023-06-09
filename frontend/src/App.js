import React from 'react';
import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import wanderhub from './images/logo.png'

function App() {
  return (
    <Container maxwidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>WanderHub</Typography>
        <img src={wanderhub} alt='wanderhub' height='60'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
            
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
