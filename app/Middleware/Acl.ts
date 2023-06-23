/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class Acl {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>, allowwedRoles: string[]) {
   
    const user = await auth.authenticate()

    if (!allowwedRoles.includes(user.profile)) {
      return response.unauthorized({ error: { message: 'access danied' } })
    }

    await next()
  }
}
