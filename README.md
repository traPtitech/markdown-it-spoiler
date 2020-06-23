# markdown-it-spoiler
[![npm version](https://badge.fury.io/js/%40traptitech%2Fmarkdown-it-spoiler.svg)](https://badge.fury.io/js/%40traptitech%2Fmarkdown-it-spoiler)
![check npm ci & run test](https://github.com/traPtitech/markdown-it-spoiler/workflows/check%20npm%20ci%20&%20run%20test/badge.svg)
![automatic publish](https://github.com/traPtitech/markdown-it-spoiler/workflows/automatic%20publish/badge.svg)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=traPtitech/markdown-it-spoiler)](https://dependabot.com)
> `!!spoiler!!` plugin for markdown-it markdown parser

`!!spoiler!!` => `<span class="spoiler">spoiler</span>`

## Installation
`$ npm i @traptitech/markdown-it-spoiler`

## `frontPriorMode`(default: `false`)
### when `false`

`!!!spoiler!!` => `!<span class="spoiler">spoiler</span>`
`!!spoiler!!!` => `<span class="spoiler">spoiler!</span>`

### when `true`

`!!!spolier!!` => `<span class="spoiler">!spoiler</span>`
`!!spolier!!!` => `<span class="spoiler">spoiler</span>!`
