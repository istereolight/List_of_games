import GameCategoryRow from "../game-category-row";
import GameRow from "../game-row";

export default function GameList({ 
  games = [],
  filterText = '',
  inWhishListOnly = false
}) {
  const rows = [];
  let lastCategory = '';

  games.forEach((game) => {
    if(game.category !== lastCategory) {

      if(game.name.toLowerCase().indexOf(filterText) === -1) {
        return
      }

      if(inWhishListOnly && !game.inWishList) {
        return
      }

      rows.push(
        <GameCategoryRow category={ game.category } key={ game.category }/>
      )
    }

    rows.push (
      <GameRow game={ game } key={ game.name }/>
    )
    lastCategory = game.category;
  }
  
)
  return (
    <ul className="game-list">
      { rows }
    </ul>
  )
}