import React, { useEffect, useReducer, useState } from "react";
const UseEffectPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <InfoComponent />}
    </div>
  );
};
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoComponent = () => {
  const [state, dispatch] = useReducer(reducer, {
    number: "",
    snake: "",
  });
  const [times, setTimes] = useState(0);
  const { number, snake } = state;
  const [clean, setClean] = useState(0);
  const onChange = (e) => {
    dispatch(e.target);
  };

  useEffect(() => {
    setTimes((times) => times + 1);
    return () => {
      setClean((clean) => clean + 1);
    };
  }, [number, snake]);

  return (
    <div>
      <div>
        <input type="text" name="number" value={number} onChange={onChange} />
        <input type="text" name="snake" value={snake} onChange={onChange} />
        <div>
          숫자 : {number}뱀 : {snake}
        </div>
        <div>useeffect는 {times} 번 실행되었군요!</div>
        <div>덩달아 cleanup 함수도 {clean} 번 실행되었군요!</div>
      </div>
    </div>
  );
};

export default UseEffectPage;
