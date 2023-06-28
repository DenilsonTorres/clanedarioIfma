/* eslint-disable no-unreachable */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TeamEvent from 'App/Models/TeamEvent'

export default class TeamEventsController {
  public async index({}: HttpContextContract) {
    const teamevents = await TeamEvent.all()
    console.log(new Date())
    return teamevents
  }

  public async store({ request }: HttpContextContract) {
    try {
      const teamEvent = request.only(['date_init', 'date_end', 'eventId', 'teamId'])
      console.log(teamEvent)
      const newTe = await TeamEvent.create(teamEvent)
      return newTe
    } catch (error) {
      console.log(error)
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      const teamEvent = await TeamEvent.findOrFail(params.id)
      return teamEvent
    } catch (error) {
      console.log(error)
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const teamEvents = await TeamEvent.findByOrFail('id', params.id)
      const data = request.only(['date_init', 'date_end', 'eventId', 'teamId'])
      teamEvents.merge(data)
      await teamEvents.save()
      return teamEvents
    } catch (error) {
      return response.status(400).json({ error: 'Team Event not found' })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const teamEvent = await TeamEvent.findOrFail(params.id)
      await teamEvent.delete()
      return response.send('Team Event deleted')
    } catch (error) {
      console.log(error)
    }
  }
}
