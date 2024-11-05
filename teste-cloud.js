const axios = require('axios');

exports.githubData = async (req, res) => {
  // Obter o usuário do GitHub a partir dos parâmetros da URL, com um padrão 'octocat'
  const user = req.query.user || 'octocat';

  // URL da API do GitHub para dados do usuário
  const url = `https://api.github.com/users/${user}`;

  try {
    // Faz a requisição para a API do GitHub
    const response = await axios.get(url);

    // Retorna os dados do usuário em formato JSON
    res.status(200).json(response.data);
  } catch (error) {
    // Retorna uma mensagem de erro se a requisição falhar
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
};
