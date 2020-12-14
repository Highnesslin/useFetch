export default function ({ url, method, params, headers, signal }) {
  const body = method === 'POST' ? JSON.stringify(params) : null;
  const fetchUrl = method === 'POST' ? url : url + getParams(params);

  return fetch(fetchUrl, { method, body, headers, signal })
    .then(response => response.json())
    .catch(error => error);
}

function getParams(params) {
  let argsStr = ''; // url拼接参数
  if (params && JSON.stringify(params) !== '{}') {
    for (let key in params) {
      argsStr += key + '=' + params[key] + '&';
    }
    argsStr = '?' + argsStr.substr(0, argsStr.length - 1);
  }
  return argsStr;
}
