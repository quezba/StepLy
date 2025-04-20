import { readdirSync } from 'fs';
import path from 'path';
import { uploadLocalFile } from './cloudinaryUploader';
import * as dotenv from 'dotenv';
dotenv.config();

const imageDir = path.join(__dirname, 'images');

async function uploadAllImages() {
  const files = readdirSync(imageDir).filter(file =>
    /\.(jpg|jpeg|png|gif)$/i.test(file)
  );

  for (const file of files) {
    const fullPath = path.join(imageDir, file);

    // Strip extension to get public_id like 'box', 'img1', etc.
    const publicId = path.basename(file, path.extname(file));

    await uploadLocalFile(fullPath, publicId);
  }

  console.log('✅ Done uploading all unique images!');
}

uploadAllImages();
