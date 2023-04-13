const db = require('../../data/dbConfig')

const Hobbit = require('./hobbits-model')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run() //will run the seeds and truncate the tables
})

test('environment is testing', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('getAll', () => {
    test('resolves all the hobbits in the table', async () => {
        const result = await Hobbit.getAll()
        expect(result).toHaveLength(4)
        expect(result).toMatchObject({ name: 'sam' })
    })
})