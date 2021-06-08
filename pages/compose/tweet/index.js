import { useState } from 'react'
import AppLayout from '@c/AppLayout'
import Button from '@c/Button'
import useUser from 'hooks/useUser'

export default function ComposeTweet () {
    
  const user = useUser()
  const [message, setMessage] = useState('')

  const handleChange = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addDevit({
        avatar: user.avatar,
        content: message,
        userId: 
    })
  }

  return (
        <>
            <AppLayout>
                <form onSubmit={handleSubmit}>
                    <textarea onChange={handleChange} placeholder="¿Qué está pasando?"></textarea>
                <div>
                    <Button disabled={message.length === 0}>Devitear</Button>
                </div>
                </form>
            </AppLayout>
            <style jsx>{`
                div {
                    padding: 15px;
                }
                
                textarea {
                    border: 0;
                    font-size: 21px;
                    min-height: 200px;
                    padding: 15px;
                    resize: none;
                    outline: 0;
                    font-size: 21px;
                    width: 100%;
                }
            `}</style>
        </>
  )
}
