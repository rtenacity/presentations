#!/usr/bin/env bun

import { readdir } from "node:fs/promises";

const build = (deck: string) =>
	Bun.spawn(
		[
			"bun",
			"run",
			"build",
			"--base",
			`/${deck}`,
			"--out",
			`../../dist/${deck}`,
			"--download",
			"--with-toc",
			"--dark",
		],
		{ cwd: `decks/${deck}` },
	);

readdir("decks").then((decks) => decks.forEach(build));
