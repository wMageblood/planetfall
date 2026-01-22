function NavigationBar() {
  return (
    <nav className="bg-tailwindBlueNavigation border border-tailwindBorder">
      <div className="mx-3">
        <div className="flex space-x-4 my-2">
          <a href="/" className="text-gray-300 hover:text-white font-medium hover:rounded-sm hover:bg-gray-500/20 p-2">HOME</a>
          <a href="/elemento1" className="text-gray-300 hover:text-white font-medium hover:rounded-sm hover:bg-gray-500/20 p-2">Elemento 1</a>
          <a href="/elemento2" className="text-gray-300 hover:text-white font-medium hover:rounded-sm hover:bg-gray-500/20 p-2">Elemento 2</a>
          <a href="/elemento3" className="text-gray-300 hover:text-white font-medium hover:rounded-sm hover:bg-gray-500/20 p-2">Elemento 3</a>
          <a href="/elemento4" className="text-gray-300 hover:text-white font-medium hover:rounded-sm hover:bg-gray-500/20 p-2">Elemento 4</a>
          <a href="/First-Generation" className="text-gray-300 hover:text-white font-medium hover:rounded-sm hover:bg-gray-500/20 p-2">First Generation</a>
          <div className="absolute right-0 space-x-4 font-medium text-gray-300 my-2 mr-3">
            <a className="hover:text-white hover:rounded-sm p-2">🔔</a>
            <a className="hover:text-white hover:rounded-sm p-2">Avatar</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;


//Logo Dashboard Team Projects Calendar    <-- -->   🔔 Avatar
//Borde un poco mas claro