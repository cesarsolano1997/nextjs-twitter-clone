import Avatar from '@c/Avatar'

export default function Devit ({ avatar, username, message, id }) {
  return (
      <>
        <article key={id}>
            <div>
                <Avatar src={avatar} alt={username}/>
            </div>
            <section>
                <strong>{username}</strong>
                <p>{message}</p>
            </section>
        </article>
        <style jsx>
            {`
                article {
                    border-bottom: 1px solid #eee;
                    display:flex;
                    padding: 10px 15px;
        
                }

                div {
                    padding-right: 10px;
                }

                p {
                    margin: 0;
                    line-height: 1.325;
                }
            `}
        </style>
    </>
  )
}
