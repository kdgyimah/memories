import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memoriesImage from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

function App() {
  const styles = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={styles.appBar} position="static" color="inherit">
        <Typography className={styles.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={styles.image} src={memoriesImage} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid 
            container 
            justify="space-between" 
            alignItems="stretch" 
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
             <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
