import { OrganisationMemberSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import User from './user.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Organisation from './organisation.ts'

export default class OrganisationMember extends OrganisationMemberSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Organisation)
  declare organisation: BelongsTo<typeof Organisation>
}
