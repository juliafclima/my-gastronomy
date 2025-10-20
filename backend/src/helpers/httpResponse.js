export const ok = (body) => {
  return {
    success: true,
    statusCode: 200,
    body,
  };
};

export const serverError = (error) => {
    return {
    success: false,
    statusCode: 500,
    body: error,
  };
};
