import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Travel from 'App/Models/Travel'
import User from 'App/Models/User'

export default class TravelsController {
  public async index({response}: HttpContextContract) {
    const travels = await Travel.query().preload('user')
    
    return response.json(travels)
  }

  public async store({request, response}: HttpContextContract) {
    const user = await User.findByOrFail('id', request.input('user_id'))
    const travel = await user.related('travels').create(request.body())

    return response.json(travel)
  }

  public async show({response, params}: HttpContextContract) {
    const travel = await Travel.query().where('id', params.id).preload('user')

    return response.json(travel)
  }

  public async update({request, response, params}: HttpContextContract) {
    const travel = await Travel.findOrFail(params.id)
    const travelUpdated = await travel.merge(request.body()).save()

    return response.json(travelUpdated)
  }

  public async destroy({response, params}: HttpContextContract) {
    await Travel.query().where('id', params.id).delete()

    return response.status(204)
  }
}
