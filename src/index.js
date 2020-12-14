import React from 'react';
import ReactDOM from 'react-dom';
import useFetch from './hooks/useFetch';

import init from '../__mocks__';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJ1c2VyX25hbWUiOi';

const App = () => {
  const [result, isLoading, sendFetch] = useFetch({
    method: 'get',
    url: '/dangerDevices',
    ...(token
      ? {
          headers: {
            'Blade-Auth': 'bearer ' + token,
          },
        }
      : {}),
  });

  if (isLoading) return <div>loading...</div>;

  window.sendFetch = sendFetch;

  return (
    <div>
      <div>result:{JSON.stringify(result)}</div>
      <button
        onClick={() =>
          sendFetch({
            name: 'boy',
          })
        }
      >
        重新加载
      </button>
    </div>
  );
};

//局部热更新
if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV === 'development') {
  init();
}
ReactDOM.render(<App />, document.getElementById('root'));
