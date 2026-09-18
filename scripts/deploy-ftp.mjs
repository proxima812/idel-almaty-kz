import { Client } from "basic-ftp";
import fs from "node:fs";

const env = Object.fromEntries(
	fs.readFileSync(new URL("../.env", import.meta.url), "utf8")
		.split("\n")
		.filter((l) => l.trim() && !l.trim().startsWith("#"))
		.map((l) => {
			const i = l.indexOf("=");
			return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
		}),
);

const client = new Client(30_000);
client.ftp.verbose = false;

try {
	await client.access({
		host: env.FTP_HOST,
		port: Number(env.FTP_PORT ?? 21),
		user: env.FTP_USER,
		password: env.FTP_PASSWORD,
		secure: false,
	});
	client.trackProgress((info) => {
		if (info.name) console.log(`↑ ${info.name}`);
	});
	await client.ensureDir("/" + env.FTP_REMOTE_DIR);
	await client.uploadFromDir("dist");
	console.log("\n✓ Deploy complete →", env.FTP_HOST + "/" + env.FTP_REMOTE_DIR);
} finally {
	client.close();
}
