### 1.安装

```
yarn add @lin/useFetch
or
npm install @lin/useFetch --save
```

### 2.开始使用

```
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

```
