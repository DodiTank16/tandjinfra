const fs = require("fs");
const path = require("path");

// CONFIG
const SOURCE_DIR = path.join(__dirname, "../src/assets/images");
const DEST_DIR = path.join(__dirname, "../public/images");

// Supported image extensions
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Recursive copy (no rename)
function processDirectory(srcDir, destDir) {
  ensureDir(destDir);

  const items = fs.readdirSync(srcDir);

  items.forEach((item) => {
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(destDir, item);

    const stats = fs.statSync(srcPath);

    if (stats.isDirectory()) {
      processDirectory(srcPath, destPath);
    } else {
      const ext = path.extname(item).toLowerCase();

      if (IMAGE_EXTENSIONS.includes(ext)) {
        fs.copyFileSync(srcPath, destPath);

        console.log(`✓ Copied: ${srcPath}`);
        console.log(`  → ${destPath}`);
      }
    }
  });
}

// Run
console.log("🚀 Moving images (no renaming)...\n");

processDirectory(SOURCE_DIR, DEST_DIR);

console.log("\n✅ Done! Images copied exactly as-is.");
