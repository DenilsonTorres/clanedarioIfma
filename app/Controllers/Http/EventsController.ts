import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'
import CreateEventValidator from 'App/Validators/CreateEventValidator'
export default class EventsController {
  public async index({}: HttpContextContract) {
    const events = await Event.all()
    return events
  }
  public async store({ auth, request }: HttpContextContract) {
    const user = await auth.authenticate()
    const data = await request.validate(CreateEventValidator)
    const event = await user.related('events').create(data)
    return event
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const event = await Event.findByOrFail('id', params.id)
      return event
    } catch (error) {
      return response.status(400).json({ error: 'Event not found' })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const event = await Event.findOrFail('id', params.id)
      const data = request.only(['title', 'description'])
      event.merge(data)
      await event.save()
      return event
    } catch (error) {
      return response.status(400).json({ error: 'Event not found' })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const event = await Event.findByOrFail('id', params.id)
      await event.delete()
      return response.status(200).json({ success: 'Event deleted' })
    } catch (error) {
      return response.status(400).json({ error: 'Event not found' })
    }
  }
}
