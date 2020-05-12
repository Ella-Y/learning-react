import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  //propsType 설정방법-1
  static propTypes = {
    name: PropTypes.string, //무조건 문자열임을 알려준다., 이를 지키지 않으면 Console 경고
    favoriteNumber: PropTypes.number.isRequired, //필수 요소임을 알려줌, 안 쓰면 Console 경고
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '기본 이름'
// };

//propsType 설정방법-2
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

export default MyComponent;
