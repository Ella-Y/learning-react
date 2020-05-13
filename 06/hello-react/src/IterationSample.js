import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  //배열 값을 사용하여 <li>리스트 아이템들을 만듭니다.
  //하지만, key를 사용하지 않아 에러가 납니다.
  //const nameList = names.map(name => <li>{name}</li>);

  //key를 설정하는 방법
  const nameList = names.map((name,index) => <li key={'IterationSample'+index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
