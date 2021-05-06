import React, { useState, useEffect, useRef, memo } from 'react'
import { Redirect } from 'react-router-dom'

import Input from '../components/Input/'
import Button from '../components/Button/'

import { URL } from '../services/api'

import { FaSistrix } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'

const Home = () => {
  const _isMounted = useRef(true)

  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    return () => {
      _isMounted.current = false
    }
  }, [])

  function handleKeyPress(e) {
    if (e.charCode === 13) handleSearchUser()
  }

  function handleChangeSearch(target) {
    const { value } = target
    setUsername(value)
  }

  async function handleSearchUser() {
    try {
      setLoading(true)
      if (username === '') throw new Error('Porfavor, digite um username.')

      const response = await fetch(`${URL}/${username}`)

      if (response.ok && response.status === 200) setRedirect(true)

      if (!response.ok && response.status === 404)
        throw new Error('Usuário não encontrado.')
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
      setRedirect(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="main-home">
        <div className="main-home__wrap">
          <Input
            type="search"
            id="search"
            value={username}
            placeholder="Type the username here..."
            handleChangeSearch={handleChangeSearch}
            handleKeyPress={handleKeyPress}
          />
          <Button handleSearchUser={handleSearchUser} disabled={loading}>
            <FaSistrix />
            {loading ? 'Buscando...' : 'Buscar'}
          </Button>
        </div>
      </section>
      <ToastContainer position="bottom-right" autoClose={4000} />
      {redirect && <Redirect to={`perfil/${username}`} />}
    </>
  )
}

export default memo(Home)
