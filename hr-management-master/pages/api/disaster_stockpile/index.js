import { getSession } from '../../../lib/iron'
import DisasterStockpiles from '../../../models/disaster-stockpile'

export default async function handler(req, res) {
  const session = await getSession(req)
  const disasterStockpiles = !session ? null : await DisasterStockpiles.findAll({
    order: [['id','ASC']]
  })

  res.status(200).json({ disaster_stockpile: disasterStockpiles || null })
}
