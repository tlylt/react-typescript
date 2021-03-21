import logo from './logo.svg';
import './App.css';
import Message from './Message';
import { render } from '@testing-library/react';
import React, {Component} from 'react';

class App extends Component {
  // let firstValue: string = 'Manny';
  // let firstValue: number = 34;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2,3,56];
  // let firstValue: Array<string> = ['many', '2'];
  // tuple
  // let aTuple: [string, number] = ['Manny', 34];
  // enum
  // enum Codes {first = 1, second = 2};
  // any
  // let firstName: any = 'Manny';
  // void 
  // const warning = (): void => {
  //   console.log('Warning');
  // }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message />
      </header>
    </div>
  );
}
}

export default App;
