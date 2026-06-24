import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const result = await pool.query('SELECT word FROM greetings LIMIT 1');
    return {
        word: result.rows[0].word,
        version: process.env.VERSION_APP ?? ''
    };
}
