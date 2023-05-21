
const apiConfig = {
  baseUrl: 'https://api.green-api.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: "*/*",
  }
}

const { baseUrl, headers } = apiConfig;

function isOk(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject('error');
}

export async function authorize({ id, token }) {

  const res = await fetch(`${baseUrl}/waInstance${id}/getSettings/${token}`, {
    method: 'GET',
  });
  const res_1 = await isOk(res);
  return res_1;
};

export async function avatar(id, token, wid) {
  const res = await fetch(`${baseUrl}/waInstance${id}/getAvatar/${token}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "chatId": `${wid}`
    })
  });
  const res_1 = await isOk(res);
  return res_1;
};

export async function contact({ id, token, wid }) {
  const res = await fetch(`${baseUrl}/waInstance${id}/getContacts/${token}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "chatId": `${wid}`
    })
  });
  const res_1 = await isOk(res);
  return res_1;
};

export async function getChats({ id, token }) {
  const res = await fetch(`${baseUrl}/waInstance${id}/getChats/${token}`, {
    method: 'GET',
    headers,
  });
  const res_1 = await isOk(res);
  return res_1;
};

export async function messageOut({ id, token }) {
  const res = await fetch(`${baseUrl}/waInstance${id}/lastOutgoingMessages/${token}?minutes=10080`, {
    method: 'GET',
    headers,
  });
  const res_1 = await isOk(res);
  return res_1;
};

export async function messageIncoming({ id, token }) {
  const res = await fetch(`${baseUrl}/waInstance${id}/lastIncomingMessages/${token}?minutes=10080`, {
    method: 'GET',
    headers,
  });
  const res_1 = await isOk(res);
  return res_1;
};

export async function historyMessage({ id, token }, chatId) {
  const res = await fetch(`${baseUrl}/waInstance${id}/getChatHistory/${token}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "chatId": `${chatId}`,
      "count": 100
    })
  });
  const res_1 = await isOk(res);
  return res_1;
};

export async function sendMessage({ id, token }, chatId, message) {
  console.log(chatId)
  const res = await fetch(`${baseUrl}/waInstance${id}/sendMessage/${token}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "chatId": `${chatId}`,
      "message": `${message}`
    })
  });
  const res_1 = await isOk(res);
  return res_1;
};

export async function messageGet({ chatId, message }) {
  const res = await fetch(`${baseUrl}/docs/api/receiving/technology-http-api`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "chatId": "79261556483@c.us",
      "count": 50
    })
  });
  const res_1 = await isOk(res);
  return res_1;
};

export async function messageReceve({ id, token }) {
  const res = await fetch(`${baseUrl}/waInstance${id}/receiveNotification/${token}`, {
    method: 'GET',
    headers,
  });
  const res_1 = await isOk(res);
  return res_1;
};
