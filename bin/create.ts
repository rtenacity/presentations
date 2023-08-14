#!/usr/bin/env bun

import { mkdir } from "node:fs/promises";

const [title, project, name] = process.argv.slice(2);

const id = title.toLowerCase().replace(/[/\s]/g, "-");
const slideFile = Bun.file(`decks/${id}/slides.md`);

if (await slideFile.exists()) {
	throw Error("Deck already exists");
}

const slideContent = `---
theme: apple-basic
layout: intro
---

# ${project}

${title}

<div class="absolute bottom-10">
  <span class="font-700">
    ${name} from hack.place()
  </span>
</div>`;

const tsconfigContent = `{
	"extends": "../../tsconfig.json"
}`;

const packageContent = `{
	"name": "${id}",
	"type": "module",
	"scripts": {
		"dev": "slidev --open",
		"build": "slidev build"
	},
	"devDependencies": {
		"bun-types": "latest"
	},
	"peerDependencies": {
		"typescript": "^5.0.0"
	},
	"dependencies": {
		"@slidev/cli": "^0.42.7",
		"@slidev/theme-apple-basic": "^0.20.0"
	}
}`;

await mkdir(`decks/${id}`).then(() =>
	Promise.all([
		Bun.write(slideFile, slideContent),
		Bun.write(`decks/${id}/tsconfig.json`, tsconfigContent),
		Bun.write(`decks/${id}/package.json`, packageContent),
	]),
);
