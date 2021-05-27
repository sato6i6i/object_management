import { getSession } from '../../../lib/iron'
import PhoneWifis from '../../../models/phone-wifi'

export default async function staffHandler(req, res) {
  const session = await getSession(req)
  console.log(req.query.id)

  switch (req.method) {
    case 'GET':
      if (!session) {
        res.status(200).json({phone_wifi: null})
        break
      }
      const phoneWifis =
        req.query.id == 'new' ? [PhoneWifis.build()] : await PhoneWifis.findAll({where: {id: req.query.id}});

      res.status(200).json({phone_wifi: phoneWifis || null})
      break

    case 'POST':
      const post = JSON.parse(req.body)
      console.log(post)
      await PhoneWifis.create(post);
      res.status(200).json({})
      break

    case 'PUT':
      const put = JSON.parse(req.body)
      await PhoneWifis.update(put, {where: {id: put.id}});
      res.status(200).json({})
      break

    case 'DELETE':
      const destroy = JSON.parse(req.body)
      await PhoneWifis.destroy({where: {id: destroy.id}});
      res.status(200).json({})
      break

    default:
  }
}
