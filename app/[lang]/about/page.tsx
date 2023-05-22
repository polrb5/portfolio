import Link from 'next/link'

export default function Page({ params: { lang } }: any) {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lang}`}>
        back
      </Link>
    </>
  )
}