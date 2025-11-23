import Headers from '../header/Header.jsx'
import Hero from '../hero/Hero.jsx'
import Experience from '../experience/Experience.jsx'
import Statistics from '../statistics/Statistics.jsx'
import Technologies from '../technologies/Technologies.jsx'
import Blog from '../blog/Blog.jsx'

export default function Home({
  user,
}) {
  return (
    <>
      {/* Remove administrative header for home page */}
      {user && <Headers />}

      <Hero user={user} />
      <Experience />
      <Statistics />
      <Technologies />
      <Blog />
    </>
  )
}