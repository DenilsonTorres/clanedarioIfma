import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Team from 'App/Models/Team'

export default class TeamsController {
  public async index({ response }: HttpContextContract) {
    try {
      const teams = await Team.all()
      return response.status(200).json(teams)
    } catch (error) {
      console.log(error)
    }
  }
  public async store({ request }: HttpContextContract) {
    try {
      const data = request.only(['name', 'courseId'])
      const newTeam = await Team.create(data)
      return newTeam
    } catch (error) {
      console.log(error)
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      const teams = await Team.findOrFail(params.id)
      return teams
    } catch (error) {
      console.log(error)
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const teams = await Team.findByOrFail('id', params.id)
      const data = request.only(['name', 'courseId'])
      teams.merge(data)
      await teams.save()
      return teams
    } catch (error) {
      return response.status(400).json({ error: 'Team not found' })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const team = await Team.findOrFail(params.id)
      await team.delete()
      return response.send('Team deleted')
    } catch (error) {
      console.log(error)
    }
  }
}
