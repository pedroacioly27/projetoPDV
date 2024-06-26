const knex = require("../../conexao");

const detalharCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await knex("clientes").where({ id }).first();
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    return res.status(200).json(cliente);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

module.exports = detalharCliente;
