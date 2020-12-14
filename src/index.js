import React from 'react';
import ReactDOM from 'react-dom';
import useFetch from './hooks/useFetch';

import init from '../__mocks__';

const token = 'token';

const App = () => {
  const [result, isLoading, sendFetch] = useFetch({
    method: 'get',
    url: '/dangerDevices',
    ...(token
      ? {
          headers: {
            Authorization: token,
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
