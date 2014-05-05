var Waterline = require('waterline');

module.exports = {

  // Define a custom table name
  tableName: 'logs',

  // Set schema true/false for adapters that support schemaless
  schema: false,


  // Disables Automatic Timestamps
  // You will need to manually update your timestamps, usually best to leave this
  // on and remove the updated_at and created_at attributes below to let Waterline
  // keep these up to date for you
  autoCreatedAt: false,
  autoUpdatedAt: false,
  // Define an adapter to use
  adapter: 'mysql',

  migrate: 'safe',

  attributes: {
    id: {
      type: 'INTEGER',
      primaryKey: true
    },
    channel: {
        type: 'STRING'
    },
    message: {
        type: 'STRING'
    },
    level: {
        type: 'STRING'
    },
    level_name: {
        type: 'STRING'
    },
    context: {
        type: 'STRING'
    },
    formatted: {
        type: 'STRING'
    },
    created_at: {
        type: 'DATE'
    },
  }
}
