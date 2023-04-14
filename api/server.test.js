const db = require('../data/dbConfig')
const request = require('supertest')
const server = require('./server')


beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run() //will run the seeds and truncate the tables
})

describe('[GET] /hobbits', () => {
    test('responds with 200 Ok', async () => {
        const res = await request(server).get('/hobbits')
    })
}) //dont make the describe endpoints asyncronous