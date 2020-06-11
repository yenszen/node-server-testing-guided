const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(hobbit) {
  const [id] = await db("hobbits").insert(hobbit, "id");
  // the "id" in insert() is not supported in SQLite3 but in postgres

  return db("hobbits")
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("hobbits");
}

function findById(id) {
  return null;
}
