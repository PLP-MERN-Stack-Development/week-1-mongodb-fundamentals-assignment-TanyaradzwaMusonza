
# MongoDB Fundamentals Assignment

## Overview

This project demonstrates the use of MongoDB for performing:

- CRUD operations
- Advanced queries
- Aggregation pipelines
- Index creation
- Performance analysis with `explain()`

---

## Tools Used

- **MongoDB**: Community Edition (local installation)
- **MongoDB Shell (`mongosh`)**: Used via PowerShell
- **MongoDB Compass**: Used for aggregation pipelines and index creation
- **Node.js**: For running the `insert_books.js` script (optional)

---

## How to Set Up and Run the Scripts

### 1. Clone the Repository

```bash
git clone <your-github-repo-url>
cd <your-repo-name>
2. Start MongoDB
Ensure MongoDB is running on your local machine at:

arduino
Copy
Edit

mongodb://localhost:27017
If you're using MongoDB Atlas, update the URI accordingly.

3. Insert Sample Data
You can insert the sample book data using one of the following methods:

Option A: Using MongoDB Shell (Recommended)
In PowerShell, run:

bash
Copy
Edit

mongosh < insert_books.js
This will insert data into a collection called books.

Option B: Manually in Compass
Open MongoDB Compass

Create a database (e.g., bookstore)

Create a collection (e.g., books)

Paste the array of book documents from insert_books.js and insert them

How to Run the Queries
All MongoDB queries are inside the queries.js file.

Steps:
Open PowerShell and run:

bash
Copy
Edit

mongosh
Switch to your database:

js
Copy
Edit

use bookstore
Run queries manually from queries.js by copying and pasting them into the shell.

For aggregation and indexing, open MongoDB Compass, navigate to your books collection, and:

Use the Aggregation tab to run the aggregation pipeline

Use the Indexes tab to create indexes

Use Explain Plan to compare query performance before and after indexing

File Descriptions
File	Purpose
insert_books.js	Populates the books collection with sample data
queries.js	All MongoDB queries: CRUD, advanced queries, aggregation, indexing
README.md	Full documentation and setup instructions
screenshots/	Folder with proof screenshots (Compass views, pipeline, indexes)

Included Screenshots (in /screenshots)
books_collection.png – Data visible in Compass

indexes_tab.png – Shows created indexes

aggregation_pipeline.png – Aggregation pipeline setup and result

explain_output.png – Explain plan results before and after indexing

