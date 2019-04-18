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
            // props는 명시된 한객체의 전송단위라고 생각하면 된다.

            // 이하 클래스의 정의한 것을 호출할 수 있다.
        <div>
            <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
        </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

// 내보내기
export default Customer;