require 'raven'

Raven.configure do |config|
  config.dsn = ENV['ZAGREB_PUNX_SENTRY_ID']
  config.current_environment = 'production'
end