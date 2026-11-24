// staging nods along; production keeps the receipts.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse = "I tested it in staging, where the database is polite enough to pretend my queries make sense.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
