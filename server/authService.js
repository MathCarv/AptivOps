// authService.js
const login = async (username, password) => {
  try {
    const response = await fetch('URL DA AZURE VOU TORAR AQUI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, token: data.token };
    } else {
      return { success: false, error: 'Credenciais inválidas' };
    }
  } catch (error) {
    return { success: false, error: 'Erro de rede' };
  }
};

export default { login };
