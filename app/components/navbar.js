import Option from './navbar/option'

const Navbar = () => {
  const options = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about' },
  ]
  return (
    <div className="flex justify-between">
      <div>Muzee</div>
      <ul className="flex gap-10">
        {options.map((option, index) => {
          return <Option key={index} name={option.name} path={option.path} />
        })}
      </ul>
    </div>
  )
}

export default Navbar
