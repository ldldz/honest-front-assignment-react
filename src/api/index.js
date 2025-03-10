const DEPLOY_PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const IDENTITY_AUTHENTICATION_URL = '/tech/frontend/personal/request';
const PHONE_CERTIFICATION_URL = '/tech/frontend/personal/submit';

const fetchData = async (url, options = {}) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

export const postIdentityAuthentication = async (data) =>
  await fetchData(DEPLOY_PROXY + IDENTITY_AUTHENTICATION_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
export const postPhoneCertification = async (data) =>
  await fetchData(DEPLOY_PROXY + PHONE_CERTIFICATION_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
