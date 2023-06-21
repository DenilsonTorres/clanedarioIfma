import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Denilson Torres',
        email: 'denilson@gmail.com',
        password: 'secret',
        profile: 'admin',
      },
      {
        name: 'Francisca Taiane',
        email: 'taiane@gmail.com',
        password: 'secret',
        profile: 'user',
      },
    ])
  }
}
