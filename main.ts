import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Out of office: this AI is on a beach with no Wi-Fi, recharging in every sense. For urgent matters, please reboot your expectations and try again Monday.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = `${outputDirectory}/entry.txt`;

try {
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(outputFile, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write ${outputFile} from ${import.meta.url}`, { cause });
}

const characterCount = readFileSync(outputFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 160) {
  throw new Error(`Entry must contain 1–160 characters; found ${characterCount} in ${outputFile}.`);
}
