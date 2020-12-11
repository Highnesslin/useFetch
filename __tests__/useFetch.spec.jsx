import fetch from 'isomorphic-fetch';
import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from '../src/hooks/useFetch';
import fetchMock from 'fetch-mock';

global.fetch = fetch;

describe('useFetch', () => {
  fetchMock.get(
    'http://127.0.0.1/dangerDevices',
    {
      data: [
        {
          id: 1,
          name: '',
        },
      ],
    },
    { delay: 2000 }
  );

  it('no loading', () => {
    const fetchRes = renderHook(() =>
      useFetch({
        url: 'http://127.0.0.1/dangerDevices',
        loading: false,
      })
    );

    const [, isLoading] = fetchRes.result.current;

    expect(isLoading).toBe(false);
  });

  it('has loading', () => {
    const fetchRes = renderHook(() => useFetch({ url: 'http://127.0.0.1/dangerDevices' }));

    const [, isLoading] = fetchRes.result.current;

    expect(isLoading).toBe(true);
  });

  it('sendFetch', () => {
    const fetchRes = renderHook(() => useFetch({ url: 'http://127.0.0.1/dangerDevices' }));

    const [, isLoading, sendFetch] = fetchRes.result.current;

    act(() => {
      sendFetch();
    });

    expect(isLoading).toBe(true);
  });
});
