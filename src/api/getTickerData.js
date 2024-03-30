const UNEXPECTED_ERROR_OBJECT = {
  data: null,
  errorMessage: 'Unexpected error',
};

const getTickerData = async ({ ticker, from, to }) => {
  const response = await fetch(
    `http://localhost:3000/stocks/${ticker}?from=${from}&to=${to}`
  );
  try {
    switch (response.status) {
      case 204:
        return { data: null, errorMessage: null };

      case 400 | 500: {
        const body = await response.json();
        return { data: null, errorMessage: body.error };
      }

      case 200: {
        const body = await response.json();
        return { data: body, errorMessage: null };
      }

      default:
        return UNEXPECTED_ERROR_OBJECT;
    }
  } catch (error) {
    return UNEXPECTED_ERROR_OBJECT;
  }
};

export default getTickerData;
