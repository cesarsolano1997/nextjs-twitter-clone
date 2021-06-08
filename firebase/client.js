import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDwaxwEoKZht4JByCw6RWAHtvzvUo0UFNQ',
  authDomain: 'clon-twiteer.firebaseapp.com',
  projectId: 'clon-twiteer',
  storageBucket: 'clon-twiteer.appspot.com',
  messagingSenderId: '108113496484',
  appId: '1:108113496484:web:f814f07fdfa89485a95931',
  measurementId: 'G-E4Z2E97QC2'
}

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}
