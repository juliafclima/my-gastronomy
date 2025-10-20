import { MongoClient } from "mongodb";

// CRIANDO O BANCO MONGODB
export const Mongo = {
  async connect({ mongoConnectionString, mongoDbName }) {
    try {
      const client = new MongoClient(mongoConnectionString);

      await client.connect();

      const db = client.db(mongoDbName);

      this.client = client;
      this.db = db;

      return 'Connected to Mongo!'
    } catch (error) {
      return { text: "Erro during Mongo connection", error };
    }
  },
};
