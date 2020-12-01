// 自定义fetchhook,封装组件卸载自动结束未完成的请求功能和loading功能
import { useState, useEffect, useRef } from 'react';
import fetch from '../utils/fetch';

const useFetch = ({ url, params, loading = true }) => {
  // 全局设定 AbortController
  const abortController = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();

  // 发起请求
  const sendFetch = () => {
    abortController.current = new AbortController();

    loading && setIsLoading(true); // 开启loading

    fetch({
      url,
      params,
      signal: abortController.current.signal,
    })
      .then(response => {
        loading && setIsLoading(false);
        setResult(response);
      })
      .catch(() => loading && setIsLoading(false));
  };

  // 组件生命周期
  useEffect(() => {
    sendFetch();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  return [result, isLoading, sendFetch];
};

export default useFetch;
