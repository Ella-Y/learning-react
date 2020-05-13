import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import ValidationSampleRefCallback from './ValidationSample.ref.callback';

class App extends Component {
  render() {
    return (
      <div>
        <h3>ValidationSample Ref:Callback</h3>
        <ValidationSampleRefCallback></ValidationSampleRefCallback>
        <br/><hr></hr>
        <h3>스크롤 자유자재 이동</h3>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        {/* onClick={this.scrollBox.scrollBottom -> 오류 (문법이 틀린건 아님)
          컴포넌트가 처음 렌더링 될 때, this.scrollBox의 값이 undefined 라서, 에러가 발생
          익명함수를 사용해 아예 새로운 함수를 만든 후 내부에서 호출 시,
          버튼을 누를 때 (이미 렌더링이 모두 완료된 시점) this.scrollBox.scrollBottm값을 읽어와서 실행하므로
          오류가 발생하지 않는다.
        } */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.scrollBox.scrollToTop()}>
          맨 위로
        </button>
      </div>
    );
  }
}
export default App;
