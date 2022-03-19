import { mount } from 'two/RemoteAppTwo';
import { useRef, useEffect } from 'react';

const AppTwo = () => {
  const ref = useRef(null);

  console.log('RemoteAppTwo:', mount);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default AppTwo;
