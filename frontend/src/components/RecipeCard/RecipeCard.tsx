import pictureRecipe from '../../assets/img-card.png'

export default function RecipeCard() {
  return (
    <div className="bg-white h-full rounded-4xl w-lg ">
      <div className="w-full relative">
        <img
          className="w-full h-1/3 object-cover rounded-t-4xl static"
          src={pictureRecipe}
          alt="visuel de la recette"
        />
        <div className="absolute right-0 top-0 bg-emerald-500 rounded-full px-4 py-2 m-7">
          <p className="text-white">10 min</p>
        </div>
      </div>
      <div className="px-15 py-5">
        <h3 className="text-3xl font-bold py-4">Titre de la recette</h3>
        <h4 className="text-lg text-gray-400 text-bold py-4">RECETTE</h4>
        <p className="mb-5">
          Mettre les glaçons à votre goût dans le blender, ajouter le lait, la
          crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la
          consistence désirée.
        </p>
        <div>
          <h4 className="text-lg text-gray-400 text-bold py-4">IGRÉDIENTS</h4>
          <div>
            <ul className="grid grid-cols-2 gap-4 mb-15">
              <li>
                <p>Lait de coco</p>
                <p className="text-gray-400">400ml</p>
              </li>
              <li>
                <p>Jus de citron</p>
                <p className="text-gray-400">2</p>
              </li>
              <li>
                <p>Crème de coco</p>
                <p className="text-gray-400">4 cuillères</p>
              </li>
              <li>
                <p>Sucre</p>
                <p className="text-gray-400">20g</p>
              </li>
              <li>
                <p>Glaçons</p>
                <p className="text-gray-400">2</p>
              </li>
              <li>
                <p>Glaçons</p>
                <p className="text-gray-400">2</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
