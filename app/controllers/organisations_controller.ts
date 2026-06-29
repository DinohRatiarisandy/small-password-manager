import type { HttpContext } from '@adonisjs/core/http'
import Organisation from '#models/organisation'
import SlugService from '#services/slug_service'
import { createOrganisationValidator } from '#validators/create_organisation'

export default class OrganisationsController {
  /**
   * Display a list of resource
   */
  async index({ auth, inertia }: HttpContext) {
    const organisations = await Organisation.query().where('ownerId', auth.user!.id)

    return inertia.render('organisation/index', { organisations })
  }

  async store({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(createOrganisationValidator)

    const slug = await SlugService.slugify(data.name)

    await Organisation.create({
      name: data.name,
      slug,
      ownerId: auth.user!.id,
    })

    return response.redirect().back()
  }
}
