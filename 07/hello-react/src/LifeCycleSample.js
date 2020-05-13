import React, { Component } from 'react';
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };
  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    //조건에 따라 특정 값 동기화
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null; //state를 변경할 필요가 없다면 null을 반환
  }

  componentDidMount() {
    //첫 렌더링을 마친 후, 호출되는 function
    //이벤트 등록,setTimeout, setInterval, network요청 등의 비동기 작업이 진행됨.
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // props 또는 state 변경 시, ReRendering 여부를 지정하는 method
    // 반환 값은 반드시 true/false
    // 이 method를 생성하지 않으면 항상 true 반환 (프로젝트 성능 최적화시 중요) 

    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //render 직전에 호출 됨
    //업데이트 하기 직전의 값을 참고해야 할 때.
    console.log('getSnapshotBeforeUpdate');
    //반환 값은 componentDidUpdate의 3번째 args
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentWillUnmount() {
    //컴포넌트를 제거할 때 실행 됨
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };


  componentDidUpdate(prevProps, prevState, snapshot) {
    //Rerendering 을 완료한 후, 실행됨
    //prevProps,prevState 를 통해 컴포넌트가 이전에 가졌던 데이터에 대해 접근 가능
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };
    return (
      // 79line은 강제로 에러를 발생 시킴
      // 존재하지 않는 함수를 사용하거나, 존재하지 않는 객체의 값을 조회하려고 할때.
      // ErrorBoundary.js 에서 에러를 띄우게 된다.
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample;
