import { getSession } from '../../../lib/iron'
import PhoneWifis from '../../../models/phone-wifi'

export default async function handler(req, res) {
  const session = await getSession(req)
  const phoneWifis = !session ? null : await PhoneWifis.findAll({
    order: [['id','ASC']]
  })

  res.status(200).json({ phone_wifi: phoneWifis || null })
}
