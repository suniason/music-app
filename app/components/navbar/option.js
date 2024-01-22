import Link from 'next/link'

const Option = ({ name, path }) => {
  return (
    <li className="hover:text-blue-500">
      <Link href={path}>{name}</Link>
    </li>
  )
}

export default Option
