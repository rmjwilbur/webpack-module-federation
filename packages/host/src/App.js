import { lazy, useState, Suspense } from 'react';

const LazyOne = lazy(() => import('./AppOne'));
const LazyTwo = lazy(() => import('./AppTwo'));

const App = () => {
  const [remote, setRemote] = useState(1);

  return (
    <div>
      <h1>Host</h1>
      <button onClick={() => setRemote(1)}>Home</button>
      <button onClick={() => setRemote(2)}>Admin</button>
      <hr />
      <div>Remote: {remote}</div>
      <Suspense fallback="Loading...">
        {remote === 1 && <LazyOne />}
        {remote === 2 && <LazyTwo />}
      </Suspense>
    </div>
  );
};

export default App;
