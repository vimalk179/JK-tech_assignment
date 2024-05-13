const { mysql } = require('mysql');
const DataBaseCommonService = {};

const pool = new mysql({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    // ssl: {
    //     rejectUnauthorized: false,  // Use this only for testing, not in production
    //     ca: fs.readFileSync(process.env.SSL_KEY).toString(),
    //   },
})

DataBaseCommonService.insertData = async (tableName, data) => {

    Logger.info(`Data Insertion : ${tableName}, Data : ${data}`)
    const columns = Object.keys(data);
    const values = Object.values(data);
    const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');

    const query = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${placeholders})`;

    Logger.info(`Insert Query ${query}`)

    try {
        const result = await pool.query(query, values);
        return result;
    } catch (error) {
        Logger.error('Database error : ' , error)
        throw error;
    }
}

DataBaseCommonService.getData = async (tableName, conditions = {}) => {
    const { where, order, limit } = conditions;
    const query = `SELECT * FROM ${tableName} ${where || ''} ${order || ''} ${limit || ''}`;

    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        throw error;
    }
}
DataBaseCommonService.updateTable = async (tableName, conditions, updateValues) => {
    const client = await pool.connect();

    try {
        const updateQuery = `UPDATE ${tableName} SET ${generateSetClause(updateValues)} WHERE ${generateWhereClause(conditions)}`;
        const result = await client.query(updateQuery);
        Logger.info('Update Query' , updateQuery)
        Logger.info('Result ' , result)

        // Log or handle the result as needed


        Logger.info(`Rows affected: ${result.rowCount}`);

        return result.rowCount; // Return the number of affected rows
    } finally {
        client.release(); // Release the client back to the pool
    }
}

DataBaseCommonService.updateFields = async (tableName, updateFields, updateValues, conditionColumn, conditionValue) => {
    const setClause = updateFields.map((field, i) => `${field} = $${i + 1}`).join(', ');

    const updateQuery = `
      UPDATE ${tableName}
      SET ${setClause}
      WHERE ${conditionColumn} = $${updateFields.length + 1}
      RETURNING *;
    `;

    const values = [...updateValues, conditionValue];

    try {
        const result = await pool.query(updateQuery, values);
        console.log(`Update successful: ${result.rowCount} row(s) updated`);
    } catch (error) {
        console.error('Error updating table:', error.message);
    } finally {
        pool.end(); // Release the pool when done
    }
}


function generateSetClause(updateValues) {
    return Object.keys(updateValues).map(key => `${key} = $${key}`).join(', ');
}

function generateWhereClause(conditions) {
    return Object.keys(conditions).map((key, index) => `${key} = $${index + 1}`).join(' AND ');
}
module.exports = DataBaseCommonService;
