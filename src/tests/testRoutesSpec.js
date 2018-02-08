import chai, { assert, expect } from 'chai'
import chaiHttp from 'chai-http'
import db from '../config/db'
import server from '../server'
import config from '../config'
import models from '../models'

chai.use(chaiHttp)
before(function (done) {
  db.connect(done)
})
after(function (done) {
  process.exit()
  done()
})

describe('Routes:', function () {
  it('should test basic route', function (done) {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        if (err) console.log(err)
        expect(res).to.have.status(200)
        done()
      })
  })
})