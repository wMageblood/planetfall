function NavigationBar() {
  return (
    <nav className={`mt-2`}>
      <div className={`flex justify-center`}>
        <div className={`bg-linear-to-b from-mainBorder1 to-mainBorder2 w-auto rounded-full h-12 flex items-center p-[3px] inset-shadow-nav`}>
          <div className={`text-gray bg-linear-to-t from-navigationBody1 to-navigationBody2 rounded-full w-full h-full flex items-center p-[3px] inset-shadow-md`}>
            <a href="#" className={`hover-navigation-button`}>Home</a>
            <a href="/elemento2" className={`hover-navigation-button ml-2`}>Pokesearch</a>
            <a href="#" className={`hover-navigation-button mx-2`}>Pokestudio</a>
            <a href="#" className={`hover-navigation-button`}>Pokeprofile</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;