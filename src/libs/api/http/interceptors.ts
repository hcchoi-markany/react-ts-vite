// define function to handle response result
const parseResponseData = (results: any) => {
  const responseStatus = results?.status;
  if (responseStatus && responseStatus >= 200 && responseStatus < 400) {
    console.log('parseResponseData call !', { isSuccess: true, data: results.data });
    return { isSuccess: true, data: results.data };
  }

  return parseResponseError(results);
};

const parseResponseError = (error: any) => {
  let messageKey = 'api.unknown-error';
  if (!error) {
    return { isSuccess: false, data: { messageKey } };
  }

  const response = error.response;
  if (!response) {
    return { isSuccess: false, data: { messageKey: 'api.unknown-error' } };
  }

  if (!response.status) {
    return { isSuccess: false, data: { messageKey: 'api.unknown-error' } };
  }

  switch (response.status) {
    case 400:
      messageKey = 'api.400';
      break;
    case 404:
      messageKey = 'api.404';
      break;
    case 500:
      messageKey = 'api.500';
      break;
    default:
      messageKey = 'api.unknown-error';
      break;
  }

  return {
    isSuccess: false,
    data: {
      messageKey: response?.data?.messageKey,
      message: response.data.detail,
      instance: response.data.instance,
      status: response.status,
    },
  };
};

export { parseResponseData, parseResponseError };
