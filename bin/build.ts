#!/usr/bin/env bun

import { readdir } from "node:fs/promises";

const build = (deck: string) =>
	Bun.spawn([
		"slidev",
		"build",
		"--base",
		deck,
		"--out",
		`../../dist/${deck}`,
	]);

readdir("decks").then((decks) => decks.forEach(build));
