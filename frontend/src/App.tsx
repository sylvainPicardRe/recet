import RecipeCard from './components/RecipeCard/RecipeCard'
// import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <div className="bg-amber-400 px-96">
      <div className="grid grid-cols-3 gap-20">
        {/* <SearchBar placeholder={'Rechercher une recette, un ingrédient, ...'} /> */}
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  )
}

export default App
