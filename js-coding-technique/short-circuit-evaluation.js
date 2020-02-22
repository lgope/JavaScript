// Longhand:

let databaseHost;
if (process.env.DB_HOST) {
  databaseHost = process.env.DB_HOST;
} else {
  databaseHost = 'localhost';
}

// Shorthand:

const databaseHost = process.env.DB_HOST || 'localhost';
