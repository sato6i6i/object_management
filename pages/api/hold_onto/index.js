import { getSession } from '../../../lib/iron'
import HoldOnto from '../../../models/hold-onto'

export default async function handler(req, res) {
  const session = await getSession(req)
  const holdontos = !session ? null : await HoldOnto.findAll({
    order: [['id','ASC']]
  })
  
  res.status(200).json({ hold_onto: holdontos || null })
}