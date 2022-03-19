import { mount } from 'one/RemoteAppOne';
import { useRef, useEffect } from 'react';

const AppOne = () => {
  const ref = useRef(null);

  console.log('RemoteAppOne:', mount);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default AppOne;
