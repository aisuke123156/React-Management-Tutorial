import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

// 보내고자 하는 데이터값을 명시.
const customer = {
  'name': '朴　相祐',
  'birthday':'940325',
  'gender':'男',
  'job':'社員' 
}

class App extends Component {
  render() {
    return (
      // Customer.js로 정의함으로서 값을 보냄.
      <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
      />
    );
  }
}
 
export default App;
