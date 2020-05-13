import React, { Component } from 'react';

class Counter extends Component {
  //1. constructor를 사용하는 방법
  //   constructor(props) {
  //     super(props);
  //     //state의 초기 값 설정
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  //2. constructor 를 사용하지 않고 state를 설정하는 방법
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state 를 조회 할 때에는 this.state 로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
          onClick={() => {
            //1. 아래의 코드는 setState를 2번 호출함에도 한번만 올라간다.
            //setState를 한다고 해서 바로 올라가는 것이 아니기 때문.
            //this.setState({number:number+1});
            //this.setState({number:number+1});
            
            //2. 이런 경우에, 아래처럼 함수를 인자로 넣어주면 된다.
            //prevState:기존상태, props: 현재 지니고 있는 props (optional)
            // this.setState((prevState,props) => {
            //   return {
            //     number: prevState.number + 1
            //   };
            // });
            // // 위 코드와 아래 코드는 완전히 똑같은 기능을 하는 코드입니다.
            // // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
            // this.setState(prevState => ({
            //   number: prevState.number + 1
            // }));
            this.setState(
              {
                number: number + 1,
              },
              //setState 작업이 끝난 이후, 특정작업 실행하기
              () => {
                console.log('방금 setState 가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
