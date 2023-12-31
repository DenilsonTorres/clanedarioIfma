import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()
    return users
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password', 'profile'])
    const user = await User.create(data)
    return user
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('id', params.id)
      return user
    } catch (error) {
      return response.status(400).json({ error: 'User not found' })
    }
  }
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('id', params.id)
      const data = request.only(['name', 'email', 'password', 'profile'])
      user.merge(data)
      await user.save()
      return user
    } catch (error) {
      return response.status(400).json({ error: 'User not found' })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('id', params.id)
      await user.delete
      return response.status(200).json({ sucess: 'user deleted' })
    } catch (error) {
      return response.status(400).json({ error: 'User not found' })
    }
  }
}
