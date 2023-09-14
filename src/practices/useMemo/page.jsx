import React, { useCallback, useMemo, useRef, useState } from "react";

const UseMemoPage = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      setList((list) => list.concat(parseInt(number)));
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  const getAverage = (numbers) => {
    console.log("평균값 계산중..");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    console.log(sum);
    return sum / numbers.length;
  };

  const memoizedAvg = useMemo(() => getAverage(list), [list]);
  //   const avg = getAverage(list);

  return (
    <div>
      <input type="number" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록!</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      메모이제이션 된 평균값 : {memoizedAvg}
      {/* 그냥 평균값 : {avg} */}
    </div>
  );
};

export default UseMemoPage;
