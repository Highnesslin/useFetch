import React from 'react';
import ReactDOM from 'react-dom';
import useFetch from './hooks/useFetch';
// import useFetch from '../lib/useFetch';

import init from '../__mocks__';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJ1c2VyX25hbWUiOiIxMzk2NzE5MzMwMCIsInJlYWxfbmFtZSI6IumrmOWzsCIsImF2YXRhciI6IiIsImF1dGhvcml0aWVzIjpbImdhc19zYWZldHlfb2ZmaWNlIl0sImNsaWVudF9pZCI6InN3b3JkIiwicm9sZV9uYW1lIjoiZ2FzX3NhZmV0eV9vZmZpY2UiLCJsaWNlbnNlIjoicG93ZXJlZCBieSBibGFkZXgiLCJwb3N0X2lkIjoiMTMyMjA2NjE4NDY0MDc0MTM3NyIsInVzZXJfaWQiOiIxMzEwNzcwOTYyOTEzMTUzMDI2Iiwicm9sZV9pZCI6IjEzMjkyNDU2MTA1MTcxMDI1OTMiLCJzY29wZSI6WyJhbGwiXSwibmlja19uYW1lIjoi6auY5bOwIiwib2F1dGhfaWQiOiIiLCJkZXRhaWwiOnsidHlwZSI6IndlYiJ9LCJleHAiOjE2MDg3OTY5ODcsImRlcHRfaWQiOiIxMzA5MzcxODc4MDc1MzQyODUwIiwianRpIjoiMzEwMTBmZGItNjE5Yy00YjkyLWJlNTEtMTA2YTQ2YmU0ZTRiIiwiYWNjb3VudCI6IjEzOTY3MTkzMzAwIn0.3DfR1Y7dTkpCTV7muhfmrUuL0ZLYwO_eUUc15E6vgUg';

const App = () => {
  const [result, isLoading, sendFetch] = useFetch({
    immediate: false,
    method: 'get',
    url: '/api/anran-check/screen/check/list',
    params: {
      checkTarget: 1,
      checkType: 1,
      dateType: undefined,
      status: undefined,
      current: 1,
      size: 10,
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
