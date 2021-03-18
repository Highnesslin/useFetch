import React from 'react';
import ReactDOM from 'react-dom';
// import useFetch from './hooks/useFetch';
import useFetch from '../lib/useFetch';

// import initMock from '../__mocks__';

const token = 'test';

const App = () => {
  const [result, isLoading, sendFetch] = useFetch({
    immediate: false,
    method: 'get',
    url: 'http://localhost:9000/qr/records', // '/api/trueExam.do?id=161093584899912011213',
    params: {
      checkTarget: 1,
      checkType: 1,
      dateType: undefined,
      status: undefined,
      current: 1,
      size: 8,
    },
    ...(token
      ? {
          headers: {
            'Blade-Auth': 'bearer ' + token,
          },
        }
      : {}),
  });

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <div>result:{JSON.stringify(result)}</div>
      <button
        onClick={() =>
          sendFetch({
            name: 'boy',
          }).then(res => {
            console.log('res', res);
          })
        }
      >
        重新加载
      </button>
    </div>
  );
};

// 局部热更新
if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV === 'development') {
  // init();
}
ReactDOM.render(<App />, document.getElementById('root'));
