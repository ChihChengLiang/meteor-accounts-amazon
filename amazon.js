Accounts.oauth.registerService('amazon');

if (Meteor.isClient) {
  Meteor.loginWithAmazon = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Amazon.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.amazon'],
    forOtherUsers: [
      'services.amazon.user_id', 'services.amazon.name', 'services.amazon.email'
    ]
  });
}