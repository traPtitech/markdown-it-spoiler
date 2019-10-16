# markdown-it-spoiler
> `!!spoiler!!` plugin for markdown-it markdown parser

`!!spoiler!!` => `<span class="spoiler">spoiler</span>`

## `frontPriorMode`(default: `false`)
### when `false`

`!!!spoiler!!` => `!<span class="spoiler">spoiler</span>`
`!!spoiler!!!` => `<span class="spoiler">spoiler!</span>`

### when `true`

`!!!spolier!!` => `<span class="spoiler">!spoiler</span>`
`!!spolier!!!` => `<span class="spoiler">spoiler</span>!`
