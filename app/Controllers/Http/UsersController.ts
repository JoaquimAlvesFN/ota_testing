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
    const user = await User.findBy('id', params.id)

    return response.json(user)
  }

  public async update({request, response, params}: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const userUpdated = await user.merge(request.body()).save()

    return response.json(userUpdated)
  }

  public async destroy({response, params}: HttpContextContract) {
    await User.query().where('id', params.id).delete()

    return response.status(204)
  }
}
