const { createServer } = require('node:http');
const MongoClient = require('mongodb').MongoClient;

// Server params
const hostname = '0.0.0.0';
const port = 3000;

// Mongo params
const mongoUri = "mongodb://mongoadmin:password@mongo";

const server = createServer(async (req, res) => {
  
  res.setHeader('Content-Type', 'text/plain');
  
  try {
    // Connect to the MongoDB client
    const client = await MongoClient.connect(mongoUri);

    // List databases
    const databaseList = await client.db().admin().listDatabases();
    const dbList = databaseList.databases.map(db => db.name).join(', ');

    // close the MongoDB connection
    client.close();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello World! The server is running.\n\nAvailable databases: ${dbList}`);
  } catch (err) {
    // handle errors
    console.log("Error connecting to MongoDB: ", err)
    res.statusCode = 500;
    
    res.end('Internal Server Error');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
