import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>404 error - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}