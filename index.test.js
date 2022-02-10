const Md = require('markdown-it')
const spoiler = require('./index');
const testLoad = require('markdown-it-testgen').load
const path = require('path')
const { test } = require('uvu')
const assert = require('uvu/assert')

const md = Md().use(spoiler, false)
const mdFrontPrior = Md().use(spoiler, true)

testLoad(path.join(__dirname, 'fixtures/default.txt'), data => {
  data.fixtures.forEach((fixture, i) =>{

    test(`frontPrior false: ${i}`, () => {
      const actual = md.render(fixture.first.text)
      const expected = fixture.second.text

      assert.is(actual, expected)
    })

  })
})

testLoad(path.join(__dirname, 'fixtures/frontPrior.txt'), data => {
  data.fixtures.forEach((fixture, i) =>{

    test(`frontPrior true: ${i}`, () => {
      const actual = mdFrontPrior.render(fixture.first.text)
      const expected = fixture.second.text

      assert.is(actual, expected)
    })

  })
})

test.run()
