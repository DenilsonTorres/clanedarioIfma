import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateEventValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.unique({ table: 'events', column: 'title' })]),
    description: schema.string({ trim: true }),
  })

  public messages: CustomMessages = {}
}
