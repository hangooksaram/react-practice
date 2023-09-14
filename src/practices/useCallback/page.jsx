import React, { useCallback, useEffect, useState } from "react";
import { Fragment } from "react";

const UseCallbackPage = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const firstFn = useCallback(() => {
    setFirst((prev) => !prev);
  }, [first]);

  const secondFn = useCallback(() => {
    setSecond((prev) => !prev);
  }, [second]);

  const thirdFn = useCallback(() => {
    setThird((prev) => !prev);
  }, [third]);

  return (
    <Fragment>
      <MemoizedComponent value={first} fn={firstFn} />
      <MemoizedComponent value={second} fn={secondFn} />
      <MemoizedComponent value={third} fn={thirdFn} />
    </Fragment>
  );
};

const MemoizedComponent = React.memo(({ value, fn }) => {
  console.log({ value, fn });
  return <button onClick={fn}>{value.toString()}</button>;
});

export default UseCallbackPage;
