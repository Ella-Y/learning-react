import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average1 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  
  //최적화 가능
  //컴포넌트가 ReRendering 될 때마다 새로 생성됨
  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    
  };

  //렌더링 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고,
  //원하는 값이 바뀌지 않았으면 이전 결과 값을 그대로 사용하는 방식
  //이게 없으면 인풋 내용이 수정될 때도 함수가 호출 됨..
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average1;
