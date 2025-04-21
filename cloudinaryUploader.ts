import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
dotenv.config() //load env variables


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


// Function to upload
async function uploadLocalFile(localFilePath: string, publicId: string): Promise<void> {
  try {

    // 1. Check if image already exists
    const existing = await cloudinary.api.resource(publicId).catch(() => null);
    if (existing) {
      console.log(`⚠️ Skipping duplicate: ${publicId}`);
      return;
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

