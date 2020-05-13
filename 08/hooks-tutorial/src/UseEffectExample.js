import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  //1. 변경할 때 마다 실행 됨.
  //   useEffect(() => {
  //     console.log("렌더링 완료");
  //     console.log({ name, nickname });
  //   });
  //2. 첫 렌더링때만 실행 하고 싶을 때,
  //   useEffect(() => {
  //     console.log("렌더링 완료(처음)");
  //     console.log({ name, nickname });
  //   },[]);
  //3. 특정 값이 업데이트 될 때만 실행하고 싶을 때, -> 배열 안에 검사하고 싶은 것을 넣어주면 됨.
//   useEffect(()=>{
//       console.log(name);
//   },[name]);
    //4. CleanUp
    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('cleanup '+name); 
        }
    },[name]);

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeNickname = (event) => {
    setNickname(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChangeName}
      ></input>
      <input
        type="text"
        name="nickname"
        value={nickname}
        onChange={onChangeNickname}
      ></input>

      <div>
        <b>이름: </b>
        {name}
        <br></br>
        <b>닉네임: </b>
        {nickname}
      </div>
    </div>
  );
}

export default UseEffectExample;
