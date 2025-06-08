import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://postgres:admin123@localhost:5432/postgres");
    await client.connect();
    return client;
}