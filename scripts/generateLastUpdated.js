// scripts/generateLastUpdated.js
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Get the latest commit date
const lastCommitDate = execSync("git log -1 --format=%cd --date=iso")
  .toString()
  .trim();

// Create a .env file in the project root
const envContent = `VITE_LAST_UPDATED=${lastCommitDate}\n`;

fs.writeFileSync(path.resolve(process.cwd(), ".env"), envContent);

console.log("Updated .env with last commit date:", lastCommitDate);
