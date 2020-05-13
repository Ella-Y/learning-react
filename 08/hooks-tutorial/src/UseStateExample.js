import React, { useState } from "react";

function UseStateExample() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState({
    name: "",
    nickName: "",
  });

  const onChangeText = (event) => {
    setText({
        ...text,
        [event.target.name]: event.target.value
    });
  };
  const name = text.name;
  const nickName = text.nickName;
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>

      <br />
      <input type="text" name="name" value={name} onChange={onChangeText}></input>
      <input type="text" name="nickName" value={nickName} onChange={onChangeText}></input>

        <div>
            <b>이름: </b>{name}
            <br></br>
            <b>닉네임: </b>{nickName}
        </div>

    </div>
  );
}

export default UseStateExample;
