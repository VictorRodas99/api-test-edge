export const findBy = async ({ condition, model, all = false }) => {
  let result

  try {
    if (all) {
      result = await model.findAll({ where: condition })
      result = result.map((data) => data.dataValues)
    } else {
      result = await model.findOne({ where: condition })
    }

    return result
  } catch (error) {
    return { error }
  }
}
