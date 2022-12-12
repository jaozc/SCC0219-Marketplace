export function getDefaultError(error) {
  console.log(error);

  return {
    ...error,
    message: 'Falha ao processar requisição, erro interno',
  };
}