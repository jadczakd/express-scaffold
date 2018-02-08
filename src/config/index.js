import dotenv from 'dotenv'
const port = 3001
dotenv.config()

const config = {
  'database': process.env.mongoDB,
  'port': port
}
export default config
