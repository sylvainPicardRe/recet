import search from '../../assets/search.png'

type SearchBarProps = {
  readonly placeholder: string
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <label
      className="search-container w-xl bg-white rounded-xl p-2 pl-7 cursor-text flex flex-row"
      htmlFor="recpie-search"
      aria-label="Recherche de recette"
    >
      <input
        className="w-full focus:outline-none focus:border-transparent"
        type="search"
        id="recpie-search"
        placeholder={placeholder}
      />
      <div className="w-10 h-10  bg-black rounded-md flex items-center justify-center">
        <img className="w-5 h-5" src={search} alt="icon du bouton recherche" />
      </div>
    </label>
  )
}
