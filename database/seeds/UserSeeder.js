'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const u1 = new User()
    u1.username = 'admin'
    u1.password = 'admin'
    u1.email = 'admin@mail.com'
    await u1.save()

    const u2 = new User()
    u2.username = 'operator'
    u2.password = 'pass123'
    u2.email = 'operator@mail.com'
    await u2.save()
  }
}

module.exports = UserSeeder
