import fetchMock from 'fetch-mock';

export default function () {
  fetchMock.get(
    '/dangerDevices',
    (url, headers) => {
      console.log('it is headers', headers);
      if (headers.Authorization !== 'token') {
        return {
          msg: 'no token',
        };
      }
      return {
        data: [
          {
            id: 1,
            name: '',
          },
        ],
      };
    },
    { delay: 2000 }
  );
}
