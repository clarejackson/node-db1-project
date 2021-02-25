const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db.select("*").from('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
  return db.select("*")
  .from('accounts')
  .where("id", id)
  .limit(1)
}

const create = async account => {
  // DO YOUR MAGIC
  const [id] = await db
  .insert({
    name: account.name,
    budget: account.budget,
  })
  .into('accounts')

  const newAcct = await db('accounts')
  .where("id", id)
  .first()

  return newAcct
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('accounts')
  .where("id", id)
  .update({
    name: account.name,
    budget: account.budget 
  });

  const updatedAcct = await db('accounts')
  .where("id", account.id)
  .first()

  return updatedAcct
}

const deleteById = async id => {
  // DO YOUR MAGIC
  return await db('accounts')
  .where('id', id)
  .del();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
