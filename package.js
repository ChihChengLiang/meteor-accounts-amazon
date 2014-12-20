Package.describe({
  name: 'liangcc:meteor-accounts-amazon',
  summary: 'Login service for Amazon accounts',
  version: '0.0.1',
  git: 'https://github.com/ChihChengLiang/meteor-accounts-amazon.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  //api.use('amazon', ['client', 'server']); // To be implemented

  api.addFiles("amazon.js");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('liangcc:meteor-accounts-amazon');
  api.addFiles('liangcc:meteor-accounts-amazon-tests.js');
});
