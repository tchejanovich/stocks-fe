const getTickerData = async ({ ticker, from, to }) => {
  try {
    const response = await fetch(
      `http://localhost:3000/stocks/${ticker}?from=${from}&to=${to}`
    );
    switch (response.status) {
      case 204:
        return { data: null, errorMessage: null };

      case 400:
      case 500: {
        const body = await response.json();
        return { data: null, errorMessage: body.error };
      }

      case 200: {
        const body = await response.json();
        return { data: body, errorMessage: null };
      }

      default:
        return {
          data: null,
          errorMessage: 'Unexpected error',
        };
    }
  } catch (error) {
    return {
      data: null,
      errorMessage: 'Error connecting to the server',
    };
  }
};

export default getTickerData;
