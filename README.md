# markdown-it-spoiler
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
