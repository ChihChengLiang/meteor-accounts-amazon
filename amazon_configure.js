Template.configureLoginServiceDialogForAmazon.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForAmazon.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client Secret'}
  ];
};