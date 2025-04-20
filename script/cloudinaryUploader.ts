import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


cloudinary.config({
  cloud_name: 'your-cloud-name',
  api_key: 'your-api-key',
  api_secret: 'your-api-secret'
});


// Function to upload
export async function uploadLocalFile(localFilePath: string, publicId: string) {
  try {

    // 1. Check if image already exists
    const existing = await cloudinary.api.resource(publicId).catch(() => null);
    if (existing) {
      console.log(`⚠️ Skipping duplicate: ${publicId}`);
      return existing.secure_url;
    }

    // 2. Upload
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: 'your-folder-name', // optional, helps keep uploads organized
    });

    console.log('Uploaded:', result.secure_url);

    // 3. Save to DB
    await prisma.image.create({
      data: {
        name: 'your-image.jpg',        // optional, up to your schema
        url: result.secure_url,                      // the Firebase URL
        uploadedAt: new Date(),        // optional
      },
    });

    console.log('✅ Uploaded:', localFilePath);
    console.log('🌐 URL:', result.secure_url);

  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

// Example usage
const filePath = path.join(__dirname, 'images', 'your-image.jpg'); // your local file
uploadLocalFile(filePath).catch(console.error);

