import { Grid } from 'semantic-ui-react';
import './App.css';
import Fibonacciv0 from './Fibonacci';

function App() {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column>
        <Fibonacciv0 />
      </Grid.Column>
    </Grid>
  )
}

export default App;
