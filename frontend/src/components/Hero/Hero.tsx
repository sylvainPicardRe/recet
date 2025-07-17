import logo from '../../assets/logo.png'
import bg from '../../assets/bg-heo.png'

import SearchBar from '../SearchBar/SearchBar'

export default function Hero() {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-emerald-800 to-emerald-100 relative flex justify-center items-center flex-col">
      <img
        src={logo}
        alt="logo du site"
        className="w-60 absolute pl-10 pt-6 top-0 left-0"
      />
      <p className="text-yellow-300 w-96 text-center pb-10">
        CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN, SIMPLES ET
        DÉLICIEUSES
      </p>
      <SearchBar placeholder={'Rechercher une recette, un ingrédient, ...'} />
    </div>
  )
}
