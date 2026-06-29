import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import https from 'https';

// --- Automated Asset Setup ---
const brainDir = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\fb1e32b2-637e-467c-ba5b-357a226c38f8';
const destDir = path.resolve('..', 'backend', 'public', 'images');

const assets = {
  'hero_bg.png': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80',
  'products_hero_bg.png': 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1600&q=80',
  'about_office.png': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  'about_warehouse.png': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'ramesh_avatar.png': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
  'fly_ash_brick.png': 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600&q=80',
  'solid_block.png': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
  'paver_block.png': 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
  'interlock_block.png': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  'hollow_block.png': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80',
  'kerb_stone.png': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'clay_brick.png': 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&q=80',
  'slate_brick.png': 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca?w=600&q=80',
  'fire_brick.png': 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&q=80',
  'sandstone_brick.png': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  'glazed_brick.png': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80'
};

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: Status Code ${response.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function syncAssets() {
  try {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    if (fs.existsSync(brainDir)) {
      const files = fs.readdirSync(brainDir);
      for (const file of files) {
        const match = file.match(/^([a-zA-Z_]+)_\d+\.png$/);
        if (match) {
          const destName = `${match[1]}.png`;
          const srcPath = path.join(brainDir, file);
          const destPath = path.join(destDir, destName);
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    for (const [filename, url] of Object.entries(assets)) {
      const filePath = path.join(destDir, filename);
      if (!fs.existsSync(filePath)) {
        await downloadFile(url, filePath);
      }
    }
  } catch (err) {
    console.error('Asset sync error:', err.message);
  }
}

// Trigger setup on startup
syncAssets();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
});
