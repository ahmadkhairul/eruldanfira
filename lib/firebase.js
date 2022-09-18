import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        "type": process.env.NEXT_FB_TYPE,
        "project_id": process.env.NEXT_FB_PROJECT_ID,
        "private_key_id": process.env.NEXT_FB_PRIVATE_KEY_ID,
        "private_key": process.env.NEXT_FB_PRIVATE_KEY,
        "client_email": process.env.NEXT_FB_CLIENT_EMAIL,
        "client_id": process.env.NEXT_FB_CLIENT_ID,
        "auth_uri": process.env.NEXT_FB_AUTH_URI,
        "token_uri": process.env.NEXT_FB_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.NEXT_FB_AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.NEXT_FB_CLIENT_X509_CERT_URL
      })
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();
