import { useEffect } from 'react'
import Head from 'next/head'

import AppLayout from '@c/AppLayout'
import Button from 'components/Button'
import GitHub from 'components/Icons/GitHub'

import { colors } from 'styles/theme'

import {
  loginWithGitHub
} from 'firebase/client'

import { useRouter } from 'next/router'
import useUser, { USER_STATES } from 'hooks/useUser'

export default function Home () {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleClick = () => {
    loginWithGitHub().catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src='/devter-logo.png' alt='Logo' />
          <h1>Devter</h1>
          <h2>Talk about development<br />with developers 👩‍💻👨‍💻</h2>

          <div>
            {
              user === USER_STATES.NOT_LOGGED &&
                <Button onClick={handleClick}>
                  <GitHub fill='#fff' width={24} height={24} />
                  Login with GitHub
                </Button>
            }
            { user === USER_STATES.NOT_KNOWN && <span>Loading...</span>}
            {/* {
              user && user.avatar && <div>
                <Avatar src={user.avatar}
                  alt={user.displayName}
                  tex={user.username}
                />
                <strong>{user.username}</strong>
              </div>
            } */}
          </div>

        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
