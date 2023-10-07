import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Demand from 'App/Models/ProductionDemand'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductionDemandsController {
  //Insert
  public async store({ request, response }: HttpContextContract) {
    try {
      const validationSchema = schema.create({
        periodo_inicio: schema.date({}, [rules.required()]),
        periodo_fim: schema.date({}, [rules.required()]),
        planejado: schema.number([rules.required()]),
        produzido: schema.number([rules.required()]),
        description: schema.string({ trim: true }, [
          rules.required(),
          rules.minLength(3),
          rules.maxLength(500),
        ]),
      })

      const body = await request.validate({
        schema: validationSchema,
        messages: {
          'periodo_inicio.required': 'O campo período é obrigatório.',
          'periodo_fim.required': 'O campo período é obrigatório.',
          'planejado.required': 'O campo planejado é obrigatório.',
          'planejado.number': 'O campo planejado deve ser um número.',
          'produzido.required': 'O campo produzido é obrigatório.',
          'produzido.number': 'O campo produzido deve ser um número.',
          'decription.required': 'O campo descrição é obrigatório.',
          'decription.string': 'O campo descrição deve ser um texto.',
          'decription.minLength': 'A descrição deve ter pelo menos 3 caracteres.',
          'decription.maxLength': 'A descrição não pode exceder 500 caracteres.',
        },
      })

      const demand = await Demand.create(body)

      response.status(201)
      return {
        message: 'Demanda criada com sucesso',
        data: demand,
      }
    } catch (error) {
      if (error.messages) {
        response.status(400).json({
          message: 'Erro de validação',
          errors: error.messages,
        })
      } else {
        console.error(error)
        response.status(500).json({
          message: `${error} Erro interno do servidor`,
        })
      }
    }
  }
  //Find All
  public async index() {
    const demand = await Demand.all()
    return {
      data: demand,
    }
  }
  //Find by id
  public async show({ params }: HttpContextContract) {
    const demand = await Demand.findOrFail(params.id)
    return {
      data: demand,
    }
  }
  //Delete
  public async destroy({ params }: HttpContextContract) {
    const demand = await Demand.findOrFail(params.id)
    await demand.delete()
    return {
      message: 'Demanda excluida com sucesso',
      data: demand,
    }
  }
  //Update
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const validationSchema = schema.create({
        periodo_inicio: schema.date({}, [rules.required()]),
        periodo_fim: schema.date({}, [rules.required()]),
        planejado: schema.number([rules.required()]),
        produzido: schema.number([rules.required()]),
        description: schema.string({ trim: true }, [
          rules.required(),
          rules.minLength(3),
          rules.maxLength(500),
        ]),
      })

      const body = await request.validate({
        schema: validationSchema,
        messages: {
          'periodoInicio.required': 'O campo período de início é obrigatório.',
          'periodoFim.required': 'O campo período de fim é obrigatório.',
          'planejado.required': 'O campo planejado é obrigatório.',
          'planejado.number': 'O campo planejado deve ser um número.',
          'produzido.required': 'O campo produzido é obrigatório.',
          'produzido.number': 'O campo produzido deve ser um número.',
          'description.required': 'O campo descrição é obrigatório.',
          'description.string': 'O campo descrição deve ser um texto.',
          'description.minLength': 'A descrição deve ter pelo menos 3 caracteres.',
          'description.maxLength': 'A descrição não pode exceder 500 caracteres.',
        },
      })

      // Encontre o registro existente pelo ID
      const demand = await Demand.findOrFail(params.id)

      // Atualize os campos relevantes com base nos dados recebidos no corpo da solicitação
      demand.merge(body)

      await demand.save()

      return {
        message: 'Demanda atualizada com sucesso',
        data: demand,
      }
    } catch (error) {
      if (error.messages) {
        response.status(400).json({
          message: 'Erro de validação',
          errors: error.messages,
        })
      } else {
        console.error(error)
        response.status(500).json({
          message: `${error} Erro interno do servidor`,
        })
      }
    }
  }
}
