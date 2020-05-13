import React, { Component } from 'react';
import './ValidationSample.css';
class ValidationSample extends Component {
  input = React.createRef(); //ref 작성
  state = {
    password: '',
    clicked: false,
    validated: false
  };
  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    //이후 사용할때는 this.input.current를 이용해 접근해야 함.
    this.input.current.focus();
  };
  render() {
    return (
      <div>
        <input
          ref={this.input}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
export default ValidationSample;
