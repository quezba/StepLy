import { readdirSync } from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const prisma = new PrismaClient();

// Initialize Firebase Admin
initializeApp({
  credential: cert(require('./serviceAccountKey.json')),
  storageBucket: 'your-project-id.appspot.com', // replace with your actual bucket
});

const bucket = getStorage().bucket();

// Function to upload
export async function uploadLocalFile(localFilePath: string, destPath: string) {
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
      name: path.basename(localFilePath),  // Use the filename
      url: url,                      // the Firebase URL
      uploadedAt: new Date(),        // optional
    },
  });

  console.log('✅ Uploaded:', localFilePath);
  console.log('🌐 URL:', url);

  return url;
}
