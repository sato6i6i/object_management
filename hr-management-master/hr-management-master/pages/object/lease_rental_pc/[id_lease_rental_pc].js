import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../components/layout'
import ObjectNavigation from '../../../components/object-navigation'
import { usePc } from '../../../lib/hooks'

const Pc = () => {
  const router = useRouter();
  const p = usePc(router.query.id_lease_rental_pc)
  const [pc, setPc] = useState()
  const [submittable, setSubmittable] = useState(false)
  const [deletable, setDeletable] = useState(false)

  useEffect(() => {
    setPc(Array.isArray(p.lease_rental_pc) ? p.lease_rental_pc[0] : '')
  },[c.isLoading])

  useEffect(() => {
    setDeletable(!(router.query.id_lease_rental_pc == 'new'))
  },[router.query.id_lease_rental_pc])

  if (!pc) {
    return null
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmittable(false)
    const method= !pc.id ? 'POST' : 'PUT'
    const res = await fetch(`/api/lease_rental_pc/${router.query.id_lease_rental_pc}`,{method: method, body:JSON.stringify(pc)});
    !pc.id && router.push(`/object/lease_rental_pc`)
  }

  function handleChange(e){
    e.preventDefault()
    setSubmittable(true)
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    setPc({...pc,[name]:value})
  }

  async function handleDelete(e){
    e.preventDefault()
    if (confirm('削除します')){
      const res = await fetch(`/api/lease_rental_pc/${router.query.id_lease_rental_pc}`, {method: 'DELETE', body:JSON.stringify(pc)});
      router.push(`/object/lease_rental_pc`)
    }
  }

  return (
