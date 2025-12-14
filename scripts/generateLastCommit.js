import { execSync } from "child_process";
import fs from "fs";

// Get the date of the last commit
const lastCommit = execSync('git log -1 --format=%cd').toString().trim();

// Write it to .env file for Vite to pick up
fs.writeFileSync('.env', `VITE_LAST_COMMIT="${lastCommit}"\n`);

console.log('Last commit written to .env:', lastCommit);
