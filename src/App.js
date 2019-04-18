import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

// 보내고자 하는 데이터값을 명시.
// 복수개일 경우에는 배열로 명시된다.
const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '朴　相祐',
  'birthday':'940325',
  'gender':'男',
  'job':'社員' 
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'お名前',
    'birthday':'190418',
    'gender':'男',
    'job':'大学生' 
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '吉田',
    'birthday':'900317',
    'gender':'女',
    'job':'プログラマー' 
  }
]

class App extends Component {
  render() {
    return (
      // Customer.js로 정의함으로서 값을 보냄.

      // Customer.js를 세번 호출하니 세개의 영역이나타난다.
      <div>
        {
          //foreach문이다.
          customers.map(c => {
            return (
              <Customer
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}   
              />
            );
          })
        }
      </div>
    );
  }
}
 
export default App;
