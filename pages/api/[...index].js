import { people } from '../../data'

export default function handler(req, res) {
  console.log(JSON.stringify(req))
  res.status(200).json(people)
}
