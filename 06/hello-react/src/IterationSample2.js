import React,{useState} from 'react';

const IterationSample2 = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '봄' },
  ]);
  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용하는 아이디

  const handleInputChange = 
    (e) => setInput(e.target.value);
  

  const handleInputItem = () => {
    //concat : 기존 배열에 새로운 값을 합쳐 새로운 Array를 return
    //*기존 배열을 변경하지 않습니다.
    const nextNames = names.concat({
      id: nextId,
      text: input,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInput(''); //inputText를 비운다.
  };

  const handleRemove = (id)=>{
    const nextNames = names.filter(name => name.id!==id);
    
    setNames(nextNames);
  }
  //onDoubleClick = {함수이름(args)} //이렇게 하면 렌더링과 동시에 doubleclick이 불러짐
  //따라서 => 로 매번 새로운 함수를 만들어서 전달.

  const nameList = names.map(name => <li key={name.id} onDoubleClick={()=>handleRemove(name.id)}>{name.text}</li>)
  return (
    //fragment
    <>
      <input type="text" value={input} onChange={handleInputChange}></input>
      <button onClick={handleInputItem}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample2;
