import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// Initialize Firebase Admin
initializeApp({
  credential: cert(require('./serviceAccountKey.json')),
  storageBucket: 'your-project-id.appspot.com', // replace with your actual bucket
});

const bucket = getStorage().bucket();

// Function to upload
async function uploadLocalFile(localFilePath: string, destPath: string) {
  await bucket.upload(localFilePath, {
    destination: destPath,
    metadata: {
      cacheControl: 'public, max-age=31536000',
    },
  });

  const file = bucket.file(destPath);
  const [url] = await file.getSignedUrl({
    action: 'read',
    expires: '03-01-2030', // customize as needed
  });

  await prisma.image.create({
    data: {
      name: 'your-image.jpg',        // optional, up to your schema
      url: url,                      // the Firebase URL
      uploadedAt: new Date(),        // optional
    },
  });

  console.log('✅ Uploaded:', localFilePath);
  console.log('🌐 URL:', url);
}

// Example usage
const filePath = path.join(__dirname, 'images', 'your-image.jpg'); // your local file
const destinationPath = 'uploads/your-image.jpg'; // where it goes in Firebase

uploadLocalFile(filePath, destinationPath).catch(console.error);

