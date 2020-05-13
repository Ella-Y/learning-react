// 클래스형 컴포넌트로 구현한 EventPractice

import React, { Component } from 'react';
class EventPractice extends Component {
  // constructor(props){
  //   super(props); //항상 필수로 호출해야 함
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  //   this.handleKeyPress = this.handleKeyPress.bind(this);
  // }

  //babel의 transform-class-properties 문법은 이하 내용과 같지만,
  //가장 정석은 위와 같이 constructor로 바인딩 하는 방법

  state = {
    username: '',
    message: ''
  };
  handleChange = e => {
    this.setState({
      //input이 여러개 일 때,
      //event.target.name은 해당 input의 name을 가르키게 됨
      //또한 객체 안에서 key를 []로 감싸게 되면 그 안에 넣은 레퍼런스가 가르키는
      //실제 값이 key값으로 사용된다.
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  };
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        {/* 아래 input은 값을 넣어주는 작업을 하지 않았기 때문에,
        html에서 어떤 값을 넣더라도 value는 값이 없음.. */}
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요2"
          //value={this.state.message}
          onChange={(e)=>{
            //event가 끝나고 해당 객체가 초기화 된다.
            //비동기적으로 이벤트 객체를 참고할 일이 있다면 e.persist();
            console.log(e);
          }}
          //onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
export default EventPractice;
