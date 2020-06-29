import React from 'react'

function Redirect({ url, path }) {
  React.useEffect(() => {
    document.title = `Redirecting to ${path}`
    window.location = url
  }, [])

  if (url.includes('herokuapp')) {
    return (
      <div className="content-box">
        <h1>Just waking up heroku&#39;s dyno</h1>
        <img src={require('./stegosaurus_03.svg')} />
        <h2>It&#39;s normally pretty quick but could take up to 45 seconds</h2>
      </div>
    )
  } else {
    return (
      <h1>REDIRECTING</h1>
    )
  }

}

export default Redirect