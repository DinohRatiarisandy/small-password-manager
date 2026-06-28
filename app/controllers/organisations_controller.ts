import type { HttpContext } from '@adonisjs/core/http'
import Organisation from '#models/organisation'

export default class OrganisationsController {
  /**
   * Display a list of resource
   */
  async index({ auth, inertia }: HttpContext) {
    const organisations = await Organisation.query().where('ownerId', auth.user!.id)

    return inertia.render('organisation/index', { organisations })
  }
}
