export const usersTable = `
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255),  -- can be NULL for OAuth users
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

export const oauthAccountsTable = `
CREATE TABLE IF NOT EXISTS oauth_accounts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    provider VARCHAR(50) NOT NULL,
    provider_account_id VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

export const initTables = async (client) => {
    await client.query(usersTable);
    await client.query(oauthAccountsTable);
};
