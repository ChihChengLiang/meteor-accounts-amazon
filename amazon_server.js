Amazon = {};

OAuth.registerService('amazon', 2, null, function(query) {

  var accessToken = getAccessToken(query);
  var identity = getIdentity(accessToken);

  return {
    serviceData: {
      id: identity.user_id,
      accessToken: accessToken
    },
    options: {profile: {name: identity.name}}
  };
});

var getAccessToken = function (query) {
  var config = ServiceConfiguration.configurations.findOne({service: 'amazon'});
  if (!config)
    throw new ServiceConfiguration.ConfigError();

  var response;
  try {
    response = HTTP.post(
      "https://api.amazon.com/auth/o2/token", {headers: {Accept: 'application/json'}, params: {
        code: query.code,
        client_id: config.clientId,
        client_secret: OAuth.openSecret(config.secret),
        grant_type: 'authorization_code',
        redirect_uri: Meteor.absoluteUrl("_oauth/amazon?close"),
        state: query.state
      }});
  } catch (err) {
    throw _.extend(new Error("Failed to complete OAuth handshake with Amazon. " + err.message),
                   {response: err.response});
  }

  if (response.data.error) { // if the http response was a json object with an error attribute
    throw new Error("Failed to complete OAuth handshake with Amazon. " + response.data.error);
  } else {
    return response.data.access_token;
  }
};

var getIdentity = function (accessToken) {
  try {
    var response = HTTP.get(
      "https://api.amazon.com/user/profile",
      {params: {member_id: 'self', access_token: accessToken}});
    return response.data;
  } catch (err) {
    throw _.extend(new Error("Failed to fetch identity from Amazon. " + err.message),
                   {response: err.response});
  }
};


Amazon.retrieveCredential = function(credentialToken, credentialSecret) {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};