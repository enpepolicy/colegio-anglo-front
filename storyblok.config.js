const StoryblokClient = require ('storyblok-js-client')

const tokenPreview = 'ht8YcLnCBQYPEA0pIpNyBgtt'
const tokenPublic = 'ICFt8QDEMnz8Ca6GxQ40tgtt'

export const version = 'draft' // 'published'

export const Storyblok = new StoryblokClient({
  accessToken: tokenPreview
})
