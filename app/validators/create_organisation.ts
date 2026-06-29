import vine from '@vinejs/vine'

export const createOrganisationValidator = vine.create({
  name: vine.string().trim().minLength(3).maxLength(100),
})
