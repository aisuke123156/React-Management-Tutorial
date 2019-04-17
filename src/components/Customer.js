// React 라이브러리를 호출
import React from 'react';

// Customer 클래스 정의
// React.Component는 React의 컴포넌트이자 클래스 이기도 하다.
class Customer extends React.Component {
    // React컴포넌트에 포함되어 있는 render함수(웹에서 보여지고자 하는 내용을 담는 함수이다.) 
    render() {
        // render함수는 화면에 표시될 내용을 return하는 형식으로 건네준다.
        return (
            // props는 React.Component에서 포함 하고 있는 내용이다. 
            // 
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        );
    }
}

// 내보내기
export default Customer;