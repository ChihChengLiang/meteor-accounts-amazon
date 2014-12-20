Package.describe({
  name: 'liangcc:meteor-accounts-amazon',
  summary: 'Login service for Amazon accounts',
  version: '0.0.1',
  git: 'https://github.com/ChihChengLiang/meteor-accounts-amazon.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'client');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  
  api.export('Amazon');
  
  api.addFiles("amazon.js");
  api.addFiles("amazon-login-button.css", "client");
  api.addFiles(
    ['amazon_configure.html', 'amazon_configure.js'],
    'client');

  api.addFiles('amazon_server.js', 'server');
  api.addFiles('amazon_client.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('liangcc:meteor-accounts-amazon');
  api.addFiles('liangcc:meteor-accounts-amazon-tests.js');
});