const { MongoClient } = require("mongodb");
const dbUser = process.env.ATLAS_USER;
const dbPassword = process.env.ATLAS_PASSWORD;
const Db = "mongodb+srv://" + dbUser + ":" + dbPassword + "@test.pvaisde.mongodb.net/?retryWrites=true&w=majority&appName=Test";

// mongodb+srv://m384572038:<db_password>@test.pvaisde.mongodb.net/?retryWrites=true&w=majority&appName=Test

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("test");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
