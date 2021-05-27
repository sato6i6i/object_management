import { getSession } from '../../../lib/iron'
import FixedAssets from '../../../models/fixed-asset'

export default async function handler(req, res) {
  const session = await getSession(req)
  const assets = !session ? null : await FixedAssets.findAll({
    order: [['id','ASC']]
  })

  res.status(200).json({ fixed_asset: assets || null })
}
