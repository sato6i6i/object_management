import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const objectNaigation = ({ page }) => {
  const active = "text-center block border border-white hover:border-gray-200 \
                  text-white bg-gray-700 py-2 px-4"
  const inactive = "text-center block border border-white hover:border-gray-200 \
                    text-gray-700" hover:bg-gray-700 hover:text-white py-2 px-4"
                    
  return (
    <div className="mb-4">
      <ul className="flex">
        <li className="flex-1 mr-2">
          <Link href="/object/hold_onto">
            <a className={page == 'hold_onto' ? active : inactive}>—a‚©‚è•i</a>
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link href="/object/construction_materials">
            <a className={page == 'construction_materials' ? active : inactive}>H–Ş—¿</a>
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link href="/object/lease_rental_pc">
            <a className={page == 'lease_rental_pc' ? active : inactive}>PC</a>
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link href="/object/phone_wifi">
            <a className={page == 'phone_wifi' ? active : inactive}>Œg‘ÑEwifi</a>
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link href="/object/fixed_asset">
            <a className={page == 'fixed_asset' ? active : inactive}>ŒÅ’è‘Y</a>
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link href="/object/disaster_stockpile">
            <a className={page == 'disaster_stockpile' ? active : inactive}>ĞŠQ”õ’~•i</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default objectNaigation