### 1.初始化项目

```
yarn init -y
```

### 2.安装依赖

```
yarn add webpack webpack-cli webpack-dev-server webpack-merge webpack-node-externals @babel/core @hot-loader/react-dom @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin html-webpack-plugin terser-webpack-plugin

yarn add react react-dom
```

### 3.准备文件夹目录

public/index.html
script/webpack.[base/dev/prod]config.js
src/hooks

### 4.编写代码

### 5.测试

1. 安装依赖

```
yarn add -D @testing-library/react-hooks
yarn add -D react-test-renderer@^16.9.0
yarn add -D isomorphic-fetch

import fetch from 'isomorphic-fetch';

global.fetch = fetch;

```

2. 测试代码

```
import fetch from 'isomorphic-fetch';
import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from '../src/hooks/useFetch';
import fetchMock from 'fetch-mock';

global.fetch = fetch; // node环境没有fetch

describe('useFetch', () => {
  // 执行mock，在外部执行会报错

  it('isLoading', () => {
    const fetchRes = renderHook(() => useFetch({ url: 'http://127.0.0.1/dangerDevices' }));

    const [, isLoading] = fetchRes.result.current;

    expect(isLoading).toBe(true);
  });

});

```
