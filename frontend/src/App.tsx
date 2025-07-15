import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-amber-50">
      <SearchBar placeholder={'Rechercher une recette, un ingrédient, ...'} />
    </div>
  )
}

export default App
