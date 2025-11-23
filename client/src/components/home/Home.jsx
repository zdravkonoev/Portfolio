import Header from '../header/Header.jsx'
import Hero from '../hero/Hero.jsx'
import Experience from '../experience/Experience.jsx'
import Statistics from '../statistics/Statistics.jsx'
import Technologies from '../technologies/Technologies.jsx'
import Blog from '../blog/Blog.jsx'
import AdminHeaders from '../header/AdminHeader.jsx'

export default function Home({
  user,
}) {
  return (
    <>
      {/* Remove administrative header for home page */}
      {user && <AdminHeaders />}
      <Header user={user} />
      <Hero />
      <Experience />
      <Statistics />
      <Technologies />
      <Blog />
    </>
  )
}