#!/usr/bin/env bun

import { readdir, rm } from "node:fs/promises";
import * as elements from "typed-html";

const rmdirOptions = { recursive: true, force: true };

const Root = ({ children }: elements.Children) => `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>hack.place()</title>

			<link href="uno.css" rel="stylesheet" type="text/css" />
		</head>

		${children}
	</html>
`;

const Card = (deck: string) => {
	rm(`decks/${deck}/node_modules`, rmdirOptions).then(() =>
		Bun.spawn(
			[
				"bun",
				"run",
				"build",
				"--base",
				`/${deck}`,
				"--out",
				`../../dist/${deck}`,
			],
			{ cwd: `decks/${deck}` },
		),
	);

	return (
		<a
			href={deck + "/"}
			class="flex items-center w-[calc(100%-2rem)] h-12 mx-4 mt-2 p-4 rounded-lg border border-[#27272a] transition-colors hover:bg-dark"
		>
			<p>{deck}</p>
		</a>
	);
};

await readdir("decks")
	.then((decks) => decks.map(Card))
	.then((cards) =>
		Bun.write(
			"dist/index.html",
			<Root>
				<body class="bg-[#09090b] text-light flex flex-col">
					<img
						src="https://www.hackplace.org/icon.svg"
						alt="hack.place() Logo"
						class="h-48 h-28 mx-4 mb-6 mt-8"
					/>

					{cards}
				</body>
			</Root>,
		),
	);
