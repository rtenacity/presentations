# Presentations

> **Important**
> This project requires [Bun](https://bun.sh/), which in turn requires [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) on Windows.

This repository contains the presentations for **hack.place()**. Slide decks are written in [Slidev Markdown](https://sli.dev/guide/syntax.html) and are rendered using the [Slidev](https://sli.dev/) presentation framework. HTML can be styled using [UnoCSS](https://sli.dev/custom/config-unocss.html), which is compatible with Tailwind CSS classes. Interactive documentation for UnoCSS is available [here](https://unocss.dev/interactive/).

Presentations for the following workshops/lessons are available:

- [Intro to HTML/CSS/JS (Beginner)](https://slides.hackplace.org/intro-to-html-css-js)
- [Intro to React (Intermediate)](https://slides.hackplace.org/intro-to-react)
- [HTMX and APIs (Intermediate)](https://slides.hackplace.org/htmx-and-apis)
- [Databases with ORMs (Advanced)](https://slides.hackplace.org/databases-with-orms)

Slides are compiled to static HTML using [@slidev/cli](https://sli.dev/guide/install.html#command-line-interface-cli) in `bin/build.ts`, and published through GitHub Actions at [slides.hackplace.org](https://slides.hackplace.org).
