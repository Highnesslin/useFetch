export default function ({ url, params, signal }) {
  const token = 'token';

  let argsStr = ''; // url拼接参数
  if (params) {
    for (let key in params) {
      argsStr += key + '=' + params[key] + '&';
    }
    argsStr = '?' + argsStr.substr(0, argsStr.length - 1);
  }

  return fetch(`${url}${params || ''}`, {
    ...(token
      ? {
          headers: {
            Authorization: 'token',
          },
        }
      : {}),
    ...(signal ? signal : {}),
  })
    .then(response => response.json())
    .catch(function (error) {
      return null;
    });
}
