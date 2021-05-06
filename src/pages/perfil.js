import React, { useState, useEffect, useRef } from 'react'
import { useLocation, Redirect, Link } from 'react-router-dom'

import Avatar from '../components/Avatar'
import Bio from '../components/Bio'
import Network from '../components/Network'
import LinksUser from '../components/LinksUser'
import Repos from '../components/Repos'
import Spinner from '../components/Loading/spinner'

import { URL } from '../services/api'

const PerfilPage = () => {
  const _isMounted = useRef(true)

  const location = useLocation()
  const [username] = useState(location.pathname.split('/')[2])
  const [goToHome, setGoToHome] = useState(false)
  const [userData, setUserData] = useState(null)
  const [reposData, setReposData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    return () => {
      _isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (username === undefined) setGoToHome(true)
  }, [username])

  useEffect(() => {
    async function getUserInfos() {
      try {
        setLoading(true)
        const response = await fetch(`${URL}/${username}`)
        if (!response.ok && response.status === 404) setError(true)
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    getUserInfos()
  }, [username])

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await fetch(`${URL}/${username}/repos`)
        if (!response.ok && response.status === 404) setError(true)
        const data = await response.json()
        setReposData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getRepos()
  }, [username])

  return (
    <>
      <main className="main-perfil">
        <aside className="main-perfil__sidebar">
          {userData && (
            <>
              <Avatar
                src={userData.avatar_url}
                alt={userData.name}
                width="267"
                height="267"
              />
              <Bio
                fullname={userData.name}
                username={userData.login}
                url={userData.html_url}
                bio={userData.bio}
              />
              <Network
                followers={userData.followers}
                following={userData.following}
              />
              <LinksUser
                company={userData.company}
                location={userData.location}
                email={userData.email}
                blog={userData.blog}
                twitter={userData.twitter_username}
              />
              <Link to="/">voltar</Link>
            </>
          )}
        </aside>
        <section className="main-perfil__content">
          {loading ? (
            <Spinner />
          ) : (
            reposData &&
            reposData.map((repo) => (
              <Repos
                key={repo.id}
                url={repo.html_url}
                name={repo.name}
                description={repo.description}
                lastUpdated={repo.updated_at}
              />
            ))
          )}
        </section>
      </main>
      {goToHome && <Redirect to="/" />}
      {error && <Redirect to="/not-found" />}
    </>
  )
}

export default PerfilPage
