// 自定义fetchhook,封装组件卸载自动结束未完成的请求功能和loading功能
import { useState, useEffect, useRef } from 'react';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'; // 兼容
import _fetch from '../utils/fetch';

const useFetch = ({
  immediate = true,
  url,
  method = 'get',
  params = {},
  headers,
  loading = true,
}) => {
  // 全局设定 AbortController
  const abortController = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();

  // 发起请求
  const sendFetch = (newParams = {}) => {
    abortController.current = new AbortController();

    loading && setIsLoading(true); // 开启loading

    return _fetch({
      url,
      method,
      params: {
        ...params,
        ...newParams,
      },
      headers,
      signal: abortController.current.signal,
    })
      .then(response => {
        loading && setIsLoading(false);
        setResult(response);
        return response;
      })
      .finally(() => {
        loading && setIsLoading(false);
      });
  };

  // 组件生命周期
  useEffect(() => {
    if (immediate) {
      sendFetch();
    }

    return () => {
      abortController.current?.abort();
    };
  }, []);

  return [result, isLoading, sendFetch];
};

export default useFetch;
