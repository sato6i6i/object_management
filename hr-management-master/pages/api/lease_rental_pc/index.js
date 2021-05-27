import { getSession } from '../../../lib/iron'
import LeaseRentalPcs from '../../../models/lease-rental-pc'

export default async function handler(req, res) {
  const session = await getSession(req)
  const pcs = !session ? null : await LeaseRentalPcs.findAll({
    order: [['id','ASC']]
  })

  res.status(200).json({ lease_rental_pc: pcs || null })
}
