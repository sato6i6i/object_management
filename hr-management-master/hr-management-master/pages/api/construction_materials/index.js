import { getSession } from '../../../lib/iron'
import ConstructionMaterials from '../../../models/construction-materials'

export default async function handler(req, res) {
  const session = await getSession(req)
  const cmaterials = !session ? null : await ConstructionMaterials.findAll({
    order: [['id','ASC']]
  })

  res.status(200).json({ construction_materials: cmaterials || null })
}
