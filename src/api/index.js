const IDENTITY_AUTHENTICATION_URL = '/tech/frontend/personal/request';

const fetchData = async (url, options = {}) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

export const postIdentityAuthentication = async (data) =>
  await fetchData(IDENTITY_AUTHENTICATION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
