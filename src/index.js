import React from 'react';
import ReactDOM from 'react-dom';

import init from '../__mocks__';

import useFetch from './lib/useFetch';

const App = () => {
  const [result, isLoading, sendFetch] = useFetch({
    url: '/dangerDevices',
  });

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <div>result:{JSON.stringify(result)}</div>
      <button onClick={sendFetch}>重新加载</button>
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
