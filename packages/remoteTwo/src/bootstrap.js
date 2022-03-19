import ReactDOM from 'react-dom';

const mount = (el) => {
  ReactDOM.render(<div>App Two</div>, el);

  return {};
};

// When we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_two-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// When we are accessed via host console, we need to export the mount function
export { mount };
