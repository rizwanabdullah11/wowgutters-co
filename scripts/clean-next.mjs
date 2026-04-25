import fs from "node:fs";
import path from "node:path";

const nextDir = path.join(process.cwd(), ".next");
const outDir = path.join(process.cwd(), "out");

function rmDirRobust(dir) {
  try {
    fs.rmSync(dir, { recursive: true, force: true, maxRetries: 10, retryDelay: 150 });
    return true;
  } catch (err) {
    // On Windows, antivirus/indexers can lock files briefly.
    // Retry a few times to avoid flaky ENOTEMPTY/EPERM errors.
    if (err && (err.code === "ENOTEMPTY" || err.code === "EPERM" || err.code === "EBUSY")) {
      for (let i = 0; i < 8; i++) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 200);
        try {
          fs.rmSync(dir, { recursive: true, force: true, maxRetries: 10, retryDelay: 150 });
          return true;
        } catch (retryErr) {
          if (i === 7) throw retryErr;
        }
      }
    }
    throw err;
  }
}

try {
  rmDirRobust(nextDir);
  console.log("clean: removed .next");
} catch (err) {
  console.warn("clean: failed to remove .next", err);
}

try {
  rmDirRobust(outDir);
  console.log("clean: removed out");
} catch (err) {
  console.warn("clean: failed to remove out", err);
}

