import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const publicDir = 'public';

async function optimizeImages() {
  console.log('Optimizing images...');

  // Optimize hero image - tractor-highway.jpg
  console.log('Optimizing tractor-highway.jpg...');
  await sharp(`${publicDir}/tractor-highway.jpg`)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${publicDir}/tractor-highway.webp`);
  
  await sharp(`${publicDir}/tractor-highway.jpg`)
    .resize(1280, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${publicDir}/tractor-highway-1280.webp`);
  
  await sharp(`${publicDir}/tractor-highway.jpg`)
    .resize(768, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${publicDir}/tractor-highway-768.webp`);
  
  // AVIF version for LCP
  await sharp(`${publicDir}/tractor-highway.jpg`)
    .resize(1920, null, { withoutEnlargement: true })
    .avif({ quality: 80 })
    .toFile(`${publicDir}/tractor-highway.avif`);

  // Optimize logos
  console.log('Optimizing ati-logo.png...');
  await sharp(`${publicDir}/ati-logo.png`)
    .resize(260, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(`${publicDir}/ati-logo.webp`);

  await sharp(`${publicDir}/ati-logo.png`)
    .resize(260, null, { withoutEnlargement: true })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(`${publicDir}/ati-logo-optimized.png`);

  console.log('Optimizing truck-logo.png...');
  await sharp(`${publicDir}/truck-logo.png`)
    .webp({ quality: 90 })
    .toFile(`${publicDir}/truck-logo.webp`);

  // Optimize other tractor images
  console.log('Optimizing other tractor images...');
  await sharp(`${publicDir}/tractor-yard.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${publicDir}/tractor-yard.webp`);

  await sharp(`${publicDir}/tractor-detail.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${publicDir}/tractor-detail.webp`);

  console.log('Image optimization complete!');
  
  // Show file sizes
  const files = [
    'tractor-highway.jpg',
    'tractor-highway.webp',
    'tractor-highway.avif',
    'ati-logo.png',
    'ati-logo.webp',
  ];
  
  console.log('\nFile sizes:');
  for (const file of files) {
    try {
      const stats = await fs.stat(`${publicDir}/${file}`);
      console.log(`  ${file}: ${(stats.size / 1024).toFixed(2)} KB`);
    } catch (e) {
      console.log(`  ${file}: not found`);
    }
  }
}

optimizeImages().catch(console.error);
