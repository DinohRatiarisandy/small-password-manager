import Organisation from '#models/organisation'

export default class SlugService {
  static async slugify(name: string) {
    // !: et si le name est 100 chars,
    // !: est-ce que le slug (150chars) est toujours valable ?
    let slug = name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')

    let exists = await Organisation.query().where('slug', slug).first()

    let i = 1

    while (exists) {
      const newSlug = `${slug}-${i}`
      exists = await Organisation.query().where('slug', newSlug).first()

      if (!exists) {
        slug = newSlug
        break
      }

      i++
    }

    return slug
  }
}
