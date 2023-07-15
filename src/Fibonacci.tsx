import React, { useEffect, useState } from 'react'
import { Container, Divider, Grid, Header, Icon, Input } from 'semantic-ui-react'

function Fibonacci() {
  useEffect(() => {
    document.title = 'Fibonnaci';
  }, []);

  const [count, setCount] = useState(0);

  return <Container>
    {/* Heads up! We apply there some custom styling, you usually will not need it. */}
    <style>
      {`
      html, body {
        background-color: #252839 !important;
      }

      p {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }

      p > span {        
        text-align: center;
      }
    }
    `}
    </style>

    <Header as='h2' icon inverted textAlign='center'>
      <Icon name='grid layout' />
      Fibonacci Sequence Demonstration
    </Header>
    <Divider />

    <Header as='h2' icon inverted textAlign='center'>
      <Header.Subheader>
        Select how many numbers in the fibonacci sequence you want to generate.
      </Header.Subheader>
    </Header>

    <Input type="number" action='Enter' placeholder='Count' value={count} onChange={(e) => handleCountChange(e)} />

    <Divider hidden />
    <Divider hidden />

    <style>
      {`

      #nested_1 p {
        background-color: orange;
        border-radius: 15px;
        width: 140%
      }

      #nested_1 span {
        font-size: 40px;
        color: white;
      }
    `}
    </style>

    <Grid>
      <Grid.Column>
        <Grid columns={13} id='nested_1'>
          {getFibonaccisV5().map(function (i) {
            return <Grid.Column>
              <p>
                <span>
                  {i.toString()}
                </span>
              </p>
            </Grid.Column>
          })}
        </Grid>
      </Grid.Column>
    </Grid>
  </Container>

  function handleCountChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setCount(Number(value));
  }

  /*
    v1: Initial function to return just an array of 1 element
  */
  function getFibonaccisV1(): Number[] {
    return [1]
  }

  /*
    v2: Basic function to return hard-coded fibonacci sequence
  */
  function getFibonaccisV2(): Number[] {
    return [0, 1, 1, 2, 3, 5]
  }

  /*
v3: Function to return calculated fibonacci sequence
*/
  function getFibonaccisV3(): Number[] {
    const fibonacciSequence: Number[] = [];

    for (let i = 0; i < count; i++) {
      fibonacciSequence.push(i);
    }

    return fibonacciSequence;
  }

  /*
    v4: Function to return calculated fibonacci sequence
    Improved with: 
    1. Handle the first 2 numbers in the sequence
    2. Handle when n > 1
  */
  function getFibonaccisV4(): number[] {
    const fibonacciSequence: number[] = [];

    for (let i = 0; i < count; i++) {
      if (i == 0) {
        fibonacciSequence.push(0);
      }
      else if (i == 1) {
        fibonacciSequence.push(1);
      } else {
        let sum = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
        fibonacciSequence.push(sum);
      }
    }

    return fibonacciSequence;
  }

  /*
    v5: Function to return calculated fibonacci sequence. 
    1. Optimize the first two conditions.
    2. Code in shorter number of lines of code
  */
  function getFibonaccisV5(): number[] {
    const fibonacciSequence: number[] = [];

    for (let i = 0; i < count; i++) {
      if (i <= 1) {
        fibonacciSequence.push(i);
      }
      else {
        let sum = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
        fibonacciSequence.push(sum);
      }
    }

    return fibonacciSequence;
  }

  /*
    v6: Wrapper function to return calculated fibonacci sequence using recurssion. 
  */
  function getAllFibonaccis(maximum: number): number[] {
    const fibonacciSequence: number[] = [];

    for (let i = 0; i < maximum; i++) {
      fibonacciSequence.push(getFibonaccisV6(i));
    }

    return fibonacciSequence;
  }

  /*
  v6: Function to return calculated fibonacci sequence using recurssion. 
   - way less code using recurssion
  */
  function getFibonaccisV6(count: number): number {
    if (count <= 1) {
      return count;
    }
    else {
      return getFibonaccisV6(count - 1) + getFibonaccisV6(count - 2);
    }
  }
}

export default Fibonacci