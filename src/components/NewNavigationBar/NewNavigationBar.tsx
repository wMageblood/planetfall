function NewNavigationBar() {
  return (
    <nav className={`flex`}>
      <div className={`flex items-center justify-center w-full font-Geist *:px-5 *:py-7 *:border-b-4 *:transition *:duration-300 text-gray-600`}>
        <a href="/" className={`border-slate-600 rounded-bl-sm hover:bg-slate-600 hover:text-white`}>Home</a>
        <a href="/search" className={`border-yellow-600 hover:bg-yellow-600 hover:text-white`}>Pokesearch</a>
        <a href="#" className={`border-sky-600 hover:bg-sky-600 hover:text-white`}>Pokestudio</a>
        <a href="/elemento1" className={`border-green-600 rounded-br-sm hover:bg-green-600 hover:text-white`}>ELEMENTO 1</a>
      </div>
    </nav>
  )
}

export default NewNavigationBar;