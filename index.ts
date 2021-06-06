const { Client } = require('@notionhq/client');
require('dotenv').config();

// Create a notion client
const notion = new Client({ auth: process.env.NOTION_TOKEN });

(async () => {
  const databaseId = process.env.DATABASE_ID;
  const response = await notion.databases.retrieve({ database_id: databaseId });
  console.log(response);
})();