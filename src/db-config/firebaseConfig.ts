import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
const serviceAccount = JSON.parse(fs.readFileSync('db-config.json').toString());
initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore()
export default db;

