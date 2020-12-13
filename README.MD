### 使用

```
const App = () => {
  const {token} = userLogin();

  const [result, isLoading, sendFetch] = useFetch({
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

  return (
    <div>
      <div>result:{JSON.stringify(result)}</div>
      <button onClick={sendFetch}>重新加载</button>
    </div>
  );
};

```
