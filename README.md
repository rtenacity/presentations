# Presentations

> **Important**
> This project requires [Bun](https://bun.sh/), which in turn requires [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) on Windows.

This repository contains the presentations for **hack.place()**. Slide decks are written in [Slidev Markdown](https://sli.dev/guide/syntax.html) and are rendered using the [Slidev](https://sli.dev/) presentation framework. Slides are compiled to static HTML using [@slidev/cli](https://sli.dev/guide/install.html#command-line-interface-cli) in `bin/build.ts`, and published through GitHub Actions at [slides.hackplace.org](https://slides.hackplace.org).

## Content

- [Intro to Web Development (Intermediate)](https://slides.hackplace.org/intro-to-html-css-js)
- [Intro to React (Intermediate)](https://slides.hackplace.org/intro-to-react)
- [Object-Oriented Python (Intermediate)](https://slides.hackplace.org/object-oriented-python)
- [HTMX and APIs (Intermediate)](https://slides.hackplace.org/htmx-and-apis)
- [Databases with ORMs (Advanced)](https://slides.hackplace.org/databases-with-orms)
- [Minecraft Modding (Advanced)](https://slides.hackplace.org/minecraft-modding)

## Instructions

1. To create a new slide deck, navigate to the project root directory and run `bun run bin/create.ts "<topic (e.g. Intro to React)>" "<application (e.g. Cookie Clicker)>" "<author (e.g. Anish Pallati)>"`, which will create a folder in `decks`.
2. The theme and title slide should already be configured. In an effort to maintain consistency across slide decks, we ask that you do not modify any of this content. Feel free to create/modify new files in your slide deck's directory. The slide deck itself will be rendered from the `slides.md` file.
3. HTML can be styled using [UnoCSS](https://sli.dev/custom/config-unocss.html), which is compatible with Tailwind CSS classes. Interactive documentation for UnoCSS is available [here](https://unocss.dev/interactive/).
4. Use the primary side bar in VS Code to access the [Slidev extension](https://marketplace.visualstudio.com/items?itemName=antfu.slidev). You can open a live preview of your slide deck directly in VS Code through this extension To preview your slide deck in the browser, navigate to its folder and run `bun run dev`.
