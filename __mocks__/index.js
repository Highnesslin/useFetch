import fetchMock from 'fetch-mock';

export default function () {
  fetchMock.get(
    '/dangerDevices',
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
}
