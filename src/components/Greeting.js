import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingApi } from '../redux/greetings/greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetingsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingApi());
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="flex">
      <p className="font-bold">
        {greeting}
      </p>
      <button type="button" onClick={refreshPage} className="bg-emerald">Click to see next greeting</button>
    </div>
  );
};

export default Greeting;
