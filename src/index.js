
'use strict';

const querystring = require('querystring');
const axios = require('axios');
const {
  cleanQuery,
  sortMultipleQuery, // eslint-disable-line
} = require('./lib');

/**
 * API to consume Sencrop data
 * @module API
 * @version 1.0.0
 */
const API = {
  getPing,
  getCrops,
  postLostPassword,
  putPassword,
  postLogin,
  postVerify,
  postUser,
  getUser,
  putUser,
  getUserGuests,
  postUserGuest,
  putUserGuest,
  deleteUserGuest,
  getUserCollaborators,
  postUserCollaborator,
  putUserCollaborator,
  deleteUserCollaborator,
  getUserAggregations,
  postUserAggregation,
  putUserAggregation,
  deleteUserAggregation,
  getUserDisplays,
  postUserDisplay,
  getUserDisplay,
  putUserDisplay,
  deleteUserDisplay,
  getUserDevices,
  getUserDevice,
  putUserDevice,
  getUserDeviceStatistics,
  getUserDeviceDegreeDays,
  getUserDeviceStatus,
  getUserDeviceForecasts,
  getUserPreferences,
  putUserPreferences,
  getOrganisationOperations,
  getUserAlerts,
  postUserAlert,
  putUserAlert,
  deleteUserAlert,
  postOrganisation,
};


/**
 * Checks API's availability.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getPing({
  _,
}, options) {
  const method = 'get';
  let urlParts = [
    'ping',
  ];
  let headers = {
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get the crops
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getCrops({
  _,
}, options) {
  const method = 'get';
  let urlParts = [
    'crops',
  ];
  let headers = {
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Request a password change e-mail.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {object} parameters.body
 * The infos to send the mail
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postLostPassword({
  _,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'password',
    'lost',
  ];
  let headers = {
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Change a user password
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {object} parameters.body
 * The infos to change the password
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function putPassword({
  _,
  body,
}, options) {
  const method = 'put';
  let urlParts = [
    'password',
  ];
  let headers = {
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Log a user in
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {object} parameters.body
 * The infos to log in
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postLogin({
  _,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'users',
    'sign_in',
  ];
  let headers = {
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Verify a user
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {object} parameters.body
 * Verify the user
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postVerify({
  _,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'users',
    'verify',
  ];
  let headers = {
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Create a user.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The new user to create
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postUser({
  _,
  authorization,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'users',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's profile.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUser({
  _,
  userId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Update a user's profile.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The new user
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function putUser({
  _,
  userId,
  authorization,
  body,
}, options) {
  const method = 'put';
  let urlParts = [
    'users',
    userId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's guests.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserGuests({
  _,
  userId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'guests',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Create a user's guest.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's guest
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postUserGuest({
  _,
  userId,
  authorization,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'users',
    userId,
    'guests',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Update a user's guest.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.guestId
 * The guest id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's guest
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function putUserGuest({
  _,
  userId,
  guestId,
  authorization,
  body,
}, options) {
  const method = 'put';
  let urlParts = [
    'users',
    userId,
    'guests',
    guestId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Delete a user's guest.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {number} parameters.guestId
 * The guest id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function deleteUserGuest({
  _,
  userId,
  guestId,
  authorization,
}, options) {
  const method = 'delete';
  let urlParts = [
    'users',
    userId,
    'guests',
    guestId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's collaborators.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserCollaborators({
  _,
  userId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'collaborators',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Create a user's collaborator.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's collaborator
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postUserCollaborator({
  _,
  userId,
  authorization,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'users',
    userId,
    'collaborators',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Update a user's collaborator.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.collaboratorId
 * The collaborator id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's collaborator
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function putUserCollaborator({
  _,
  userId,
  collaboratorId,
  authorization,
  body,
}, options) {
  const method = 'put';
  let urlParts = [
    'users',
    userId,
    'collaborators',
    collaboratorId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Delete a user's collaborator.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {number} parameters.collaboratorId
 * The collaborator id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function deleteUserCollaborator({
  _,
  userId,
  collaboratorId,
  authorization,
}, options) {
  const method = 'delete';
  let urlParts = [
    'users',
    userId,
    'collaborators',
    collaboratorId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's aggregations.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {boolean} parameters.compute
 * Wether the aggregations should be computed,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserAggregations({
  _,
  userId,
  compute,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'aggregations',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
    compute: compute,
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Create a user's aggregation.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's aggregation
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postUserAggregation({
  _,
  userId,
  authorization,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'users',
    userId,
    'aggregations',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Update a user's aggregation.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.aggregationId
 * The aggregation id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's aggregation
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function putUserAggregation({
  _,
  userId,
  aggregationId,
  authorization,
  body,
}, options) {
  const method = 'put';
  let urlParts = [
    'users',
    userId,
    'aggregations',
    aggregationId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Delete a user's aggregation.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {number} parameters.aggregationId
 * The aggregation id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function deleteUserAggregation({
  _,
  userId,
  aggregationId,
  authorization,
}, options) {
  const method = 'delete';
  let urlParts = [
    'users',
    userId,
    'aggregations',
    aggregationId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's displays.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserDisplays({
  _,
  userId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'displays',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Create a user's display.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's display
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postUserDisplay({
  _,
  userId,
  authorization,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'users',
    userId,
    'displays',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's display.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {number} parameters.displayId
 * The display id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserDisplay({
  _,
  userId,
  displayId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'displays',
    displayId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Update a user's display.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.displayId
 * The display id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's display
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function putUserDisplay({
  _,
  userId,
  displayId,
  authorization,
  body,
}, options) {
  const method = 'put';
  let urlParts = [
    'users',
    userId,
    'displays',
    displayId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Delete a user's display.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {number} parameters.displayId
 * The display id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function deleteUserDisplay({
  _,
  userId,
  displayId,
  authorization,
}, options) {
  const method = 'delete';
  let urlParts = [
    'users',
    userId,
    'displays',
    displayId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's devices.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserDevices({
  _,
  userId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'devices',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's device.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.deviceId
 * The device id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserDevice({
  _,
  userId,
  deviceId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'devices',
    deviceId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Update a user's device.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.deviceId
 * The device id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user device
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function putUserDevice({
  _,
  userId,
  deviceId,
  authorization,
  body,
}, options) {
  const method = 'put';
  let urlParts = [
    'users',
    userId,
    'devices',
    deviceId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's device's device's statistics.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.deviceId
 * The device id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {string} parameters.startDate
 * The statistics start date,
 * @param {string} parameters.endDate
 * The statistics end date,
 * @param {array} parameters.measures
 * The measures to read
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserDeviceStatistics({
  _,
  userId,
  deviceId,
  authorization,
  startDate,
  endDate,
  measures,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'devices',
    deviceId,
    'statistics',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
    startDate: startDate,
    endDate: endDate,
    measures: measures,
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's device's degree days.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.deviceId
 * The device id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {string} parameters.startDate
 * The statistics start date,
 * @param {string} parameters.endDate
 * The statistics end date
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserDeviceDegreeDays({
  _,
  userId,
  deviceId,
  authorization,
  startDate,
  endDate,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'devices',
    deviceId,
    'degreeDays',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
    startDate: startDate,
    endDate: endDate,
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's device's status at a given date.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.deviceId
 * The device id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {string} parameters.date
 * The status date,
 * @param {array} parameters.measures
 * The measures to read
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserDeviceStatus({
  _,
  userId,
  deviceId,
  authorization,
  date,
  measures,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'devices',
    deviceId,
    'statuses',
    date,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
    measures: measures,
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's device's forecasts.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.deviceId
 * The device id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserDeviceForecasts({
  _,
  userId,
  deviceId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'devices',
    deviceId,
    'forecasts',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's preferences.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserPreferences({
  _,
  userId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'preferences',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Update a user's preferences.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The new user preferences
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function putUserPreferences({
  _,
  userId,
  authorization,
  body,
}, options) {
  const method = 'put';
  let urlParts = [
    'users',
    userId,
    'preferences',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a organisation's operations.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.organisationId
 * The organisation id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getOrganisationOperations({
  _,
  organisationId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'organisations',
    organisationId,
    'operations',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Get a user's alerts.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function getUserAlerts({
  _,
  userId,
  authorization,
}, options) {
  const method = 'get';
  let urlParts = [
    'users',
    userId,
    'alerts',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Create a user's alert.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's alert
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postUserAlert({
  _,
  userId,
  authorization,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'users',
    userId,
    'alerts',
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Update a user's alert.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {string} parameters.alertId
 * The alert id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism,
 * @param {object} parameters.body
 * The user's alert
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function putUserAlert({
  _,
  userId,
  alertId,
  authorization,
  body,
}, options) {
  const method = 'put';
  let urlParts = [
    'users',
    userId,
    'alerts',
    alertId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Delete a user's alert.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {number} parameters.userId
 * The user id,
 * @param {number} parameters.alertId
 * The alert id,
 * @param {string} parameters.authorization
 * Authorization with Bearer mecanism
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function deleteUserAlert({
  _,
  userId,
  alertId,
  authorization,
}, options) {
  const method = 'delete';
  let urlParts = [
    'users',
    userId,
    'alerts',
    alertId,
  ];
  let headers = {
    Authorization: authorization,
  };
  let qs = cleanQuery({
  });
  let data = {}.undef;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

/**
 * Creates a new organisation.
 * @param {Object} parameters
 * The parameters to provide (destructured)
 * @param {object} parameters.body
 * The necessary contents to create a new organisation
 * @param {Object} options
 * Options to override Axios request configuration
 * @return {Object}
 * The HTTP response
 */
function postOrganisation({
  _,
  body,
}, options) {
  const method = 'post';
  let urlParts = [
    'organisations',
  ];
  let headers = {
  };
  let qs = cleanQuery({
  });
  let data = body;

  return axios(Object.assign({
    baseURL: 'http://localhost:1337/v1/',
    paramsSerializer: querystring.stringify.bind(querystring),
    validateStatus: status => 200 <= status && 300 > status,
    method: method,
    url: urlParts.join('/'),
    headers,
    params: qs,
    data,
  }, options || {}));
}

module.exports = API;
