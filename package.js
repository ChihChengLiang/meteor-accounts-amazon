Package.describe({
  name: 'liangcc:meteor-accounts-amazon',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.addFiles('liangcc:meteor-accounts-amazon.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('liangcc:meteor-accounts-amazon');
  api.addFiles('liangcc:meteor-accounts-amazon-tests.js');
});
