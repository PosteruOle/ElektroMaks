import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const buildDir = path.join(repoRoot, 'dist', 'apps', 'web');

const entriesToCopy = ['index.html', '.htaccess', 'assets', 'llms.txt'];
const entriesToClean = ['index.html', '.htaccess', 'assets', 'llms.txt'];

async function exists(targetPath) {
	try {
		await fs.access(targetPath);
		return true;
	} catch {
		return false;
	}
}

async function removeEntry(relativePath) {
	const absolutePath = path.join(repoRoot, relativePath);
	if (!(await exists(absolutePath))) {
		return;
	}
	await fs.rm(absolutePath, { recursive: true, force: true });
}

async function copyEntry(relativePath) {
	const src = path.join(buildDir, relativePath);
	if (!(await exists(src))) {
		return;
	}

	const dest = path.join(repoRoot, relativePath);
	await fs.cp(src, dest, { recursive: true });
}

async function main() {
	if (!(await exists(buildDir))) {
		throw new Error(
			'Missing dist/apps/web build output. Run "npm run build" first.'
		);
	}

	for (const entry of entriesToClean) {
		await removeEntry(entry);
	}

	for (const entry of entriesToCopy) {
		await copyEntry(entry);
	}

	console.log('Exported Hostinger-ready files to repository root.');
}

main().catch((error) => {
	console.error(error.message);
	process.exit(1);
});
