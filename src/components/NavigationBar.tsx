function NavigationBar() {
  return (
    <nav className={``}>
      <div className={`flex justify-center`}>
        <div className={`bg-linear-to-b from-navigationGrayInactive to-navigationBlackGray w-auto rounded-full h-12 flex items-center p-[3px] inset-shadow-nav`}>
          <div className={`text-gray-300 bg-linear-to-t from-navigationBody1 to-navigationBody2 rounded-full w-full h-full flex items-center p-[3px]`}>
            <a href="#" className={`hover-navigation-button`}>PokeProj</a>
            <a href="#" className={`hover-navigation-button ml-2`}>PokeGall</a>
            <a href="#" className={`hover-navigation-button mx-2`}>PokeStu</a>
            <a href="#" className={`hover-navigation-button`}>PokeProf</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;



// <nav className="place-items-center mt-2">
//   <div className="">
//     <div className="bg-linear-to-tr from-navigationBlackGray to-navigationGray flex items-center rounded-4xl w-auto h-15 text-gray-300 font-bold p-[3px]">
//       <div className={`rounded-full bg-linear-to-bl from-navigationBlackGray to-navigationGray inset-shadow-md h-full w-full flex items-center justify-center`}>
//         <a href="/" className=" ml-6 mx-6 tracking-tighter">POKESTADIUM</a>
//         <a href="/elemento1" className="mx-4 tracking-tighter">POKEHUNTER</a>
//         <a href="/elemento2" className="mx-4 tracking-tighter">POKEVIEWER</a>
//         <a href="" className="mr-6 mx-4 tracking-tighter">POKECLINIC</a>
//       </div>
//     </div>
//   </div>
// </nav>