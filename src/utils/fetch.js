export default function ({ url, params, headers, signal }) {
  let argsStr = ''; // url拼接参数
  if (params) {
    for (let key in params) {
      argsStr += key + '=' + params[key] + '&';
    }
    argsStr = '?' + argsStr.substr(0, argsStr.length - 1);
  }

  console.log('headers', headers);

  return fetch(`${url}${params || ''}`, {
    ...(headers ? headers : {}),
    ...(signal ? signal : {}),
  })
    .then(response => response.json())
    .catch(function (error) {
      return null;
    });
}
