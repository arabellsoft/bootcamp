import { Grid } from 'semantic-ui-react';
import './App.css';
import Friends from './Friends';

function App() {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Friends />
      </Grid.Column>
    </Grid>
  )
}

export default App;
