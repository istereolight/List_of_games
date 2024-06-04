import GameCategoryRow from "../game-category-row";
import GameRow from "../game-row";

export default function GameList({ 
  games = []
}) {
  const rows = [];
  let lastCategory = '';

  games.forEach((game) => {
    if(game.category !== lastCategory) {
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