export default function Avatar({ 
  avatarUrl 
}) {
  return (
    <>
      <img src={avatarUrl} alt="" className="inline-block size-70 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
    </>
  )
}