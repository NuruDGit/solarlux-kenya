import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const requiredEnvironmentVariables = [
  "R2_BUCKET",
  "R2_ACCESS_KEY_ID",
  "R2_SECRET_ACCESS_KEY",
  "R2_ENDPOINT",
  "R2_PUBLIC_URL",
] as const;

for (const name of requiredEnvironmentVariables) {
  if (!process.env[name]) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
}

const contentTypeByExtension: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const bucket = process.env.R2_BUCKET as string;
const publicUrl = (process.env.R2_PUBLIC_URL as string).replace(/\/$/, "");
const mediaDirectory = path.resolve(process.cwd(), "public/media");

const client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
  },
});

const files = (await readdir(mediaDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && !entry.name.startsWith("."))
  .map((entry) => entry.name)
  .sort();

for (const filename of files) {
  const extension = path.extname(filename).toLowerCase();
  const key = `media/${filename}`;

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: await readFile(path.join(mediaDirectory, filename)),
      ContentType: contentTypeByExtension[extension] || "application/octet-stream",
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );
}

const checks = await Promise.all(
  files.map(async (filename) => {
    const response = await fetch(`${publicUrl}/media/${encodeURIComponent(filename)}`, {
      method: "HEAD",
    });
    return response.ok;
  }),
);

if (checks.some((result) => !result)) {
  throw new Error("One or more migrated media files failed public delivery verification.");
}

console.log(`Existing Payload media migrated and verified: ${files.length} files`);
