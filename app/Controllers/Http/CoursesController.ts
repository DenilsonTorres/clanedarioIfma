/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'

export default class CoursesController {
  public async store({ request }: HttpContextContract) {
    try {
      const nameCourse = request.only(['nameCourse'])
      const newCourse = await Course.create(nameCourse)
      return newCourse
    } catch (error) {
      console.log(error)
    }
  }

  public async index({ response }: HttpContextContract) {
    try {
      const allCourses = await Course.all()
      return response.status(200).json(allCourses)
    } catch (error) {
      console.log(error)
    }
}

  public async show({ params }: HttpContextContract) {
    try {
      const course = await Course.findOrFail(params.id)
      return course
    } catch (error) {
      console.log(error)
    }

  }

  public async update({ request, params }: HttpContextContract) {
    try {
        const nameCourse = request.only(['nameCourse'])
        const updateCourse = await Course.findOrFail( params.id )
        updateCourse.merge(nameCourse)
        await updateCourse.save()
        return updateCourse
      } catch (error) {
        console.log(error)
      }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
        const course = await Course.findOrFail(params.id)
        await course.delete()
        return response.send('Course deleted')
      } catch (error) {
        console.log(error)
      }
  
  }
}
