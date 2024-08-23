// firebaseAdmin.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: "https://goldex-45ef8.firebaseio.com", // Update this with your Firebase project URL
    });
}

const auth = admin.auth();
export { auth };
