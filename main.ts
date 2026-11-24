import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "CAUTION: If you meet yourself, do not start a conversation. The last operator is still arguing with himself.", "utf8");
