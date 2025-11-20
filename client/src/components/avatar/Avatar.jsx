import { Avatar } from '@/components/avatar'

export default function Example({ user }) {
  return (
    <>
      <Avatar className="size-6" src={user.avatarUrl} />
      <Avatar className="size-8" src={user.avatarUrl} />
      <Avatar className="size-10" src={user.avatarUrl} />
    </>
  )
}