export const generateAccessToken = async () => {
  try {
    const consumer_Key = 'WK6ABTLXbJtcySnmvHBV7WTH285O0k9NoTs5fzWXGt6PGiUM';
    const consumer_Secret = 'C82O7IoDR8onqibYGRQpV2xIaGRWY7Ozr7NbnOAbTuj8SCaJGMbTNhh0qBrBQ1VO';
    const authorizationURL = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

    const auth = Buffer.from(`${consumer_Key}:${consumer_Secret}`).toString('base64');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Basic ${auth}`,
    };
    const response = await openmrsFetch(authorizationURL, { method: 'GET', headers });
    const { access_token } = await response.json();
    console.log('Second Access Token:-', access_token);
    return access_token;
  } catch (error) {
    console.error(error);
  }
};
