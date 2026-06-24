import { OrganisationSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import User from './user.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import OrganisationMember from './organisation_member.ts'

export default class Organisation extends OrganisationSchema {
  @belongsTo(() => User)
  declare owner: BelongsTo<typeof User>

  @hasMany(() => OrganisationMember)
  declare members: HasMany<typeof OrganisationMember>
}
