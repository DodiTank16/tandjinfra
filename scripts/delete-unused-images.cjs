const fs = require("fs");
const path = require("path");

// CONFIG — change these paths if needed
const IMAGES_DIR = path.join(__dirname, "../src/assets/images/Indiamart");
const SRC_DIR = path.join(__dirname, "../src");

// image extensions
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];

// safety mode (true = preview only, false = actually delete)
const DRY_RUN = false;

// store used images
const usedImages = new Set();

// recursively scan source files
function scanSourceFiles(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanSourceFiles(fullPath);
    } else {
      const content = fs.readFileSync(fullPath, "utf-8");

      IMAGE_EXTENSIONS.forEach((ext) => {
        const regex = new RegExp(`([\\w\\-/%. ]+${ext})`, "gi");
        const matches = content.match(regex);

        if (matches) {
          matches.forEach((match) => {
            usedImages.add(path.basename(match));
          });
        }
      });
    }
  }
}

// recursively scan images
function scanImages(dir, unused = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanImages(fullPath, unused);
    } else {
      const ext = path.extname(item).toLowerCase();

      if (IMAGE_EXTENSIONS.includes(ext)) {
        if (!usedImages.has(item)) {
          unused.push(fullPath);
        }
      }
    }
  }

  return unused;
}

// RUN
console.log("🔍 Scanning source files...");
scanSourceFiles(SRC_DIR);

console.log("🔍 Scanning images...");
const unusedImages = scanImages(IMAGES_DIR);

console.log(`\nFound ${unusedImages.length} unused images\n`);

unusedImages.forEach((file) => {
  console.log("Unused:", file);

  if (!DRY_RUN) {
    fs.unlinkSync(file);
    console.log("Deleted:", file);
  }
});

if (DRY_RUN) {
  console.log("\n⚠️ DRY RUN mode enabled. Nothing deleted.");
  console.log("Set DRY_RUN = false to delete.");
} else {
  console.log("\n✅ Unused images deleted.");
}
