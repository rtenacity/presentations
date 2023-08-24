#!/usr/bin/env bun

import { mkdir } from "node:fs/promises";

const [title, project, name] = process.argv.slice(2);

const id = title.toLowerCase().replace(/[/\s]/g, "-");
const directory = `decks/${id}`;

const slideFile = Bun.file(`${directory}/slides.md`);

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
</div>
`;

const tsconfigContent = `{
	"extends": "../../tsconfig.json"
}
`;

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
		"@slidev/cli": "^0.42.9",
		"@slidev/theme-apple-basic": "^0.20.0"
	}
}
`;

await mkdir(directory).then(() =>
	Promise.all([
		Bun.write(slideFile, slideContent),
		Bun.write(`${directory}/tsconfig.json`, tsconfigContent),
		Bun.write(`${directory}/package.json`, packageContent),
	]),
);
