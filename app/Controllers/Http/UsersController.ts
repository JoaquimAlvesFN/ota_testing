import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({response}: HttpContextContract) {
    const users = await User.all()
    
    return response.json(users)
  }

  public async store({request, response}: HttpContextContract) {
    const user = await User.create(request.body())

    return response.json(user)
  }

  public async show({response, params}: HttpContextContract) {
    const id = params
    
    const user = await User.findBy('id', id)

    return response.json(user)
  }

  public async update({}: HttpContextContract) {}

  public async destroy({response, params}: HttpContextContract) {
    const id = params

    const userDeleted = await User.query().where(id).delete()

    return response.json(userDeleted)
  }
}
