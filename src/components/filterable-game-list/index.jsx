import GameList from '../game-list';
import SearchBar from '../search-bar';


export default function FilterableGameList({ games = [] }) {
  return (
    <div className="filterable-game-list">
      <SearchBar />
      <GameList games={ games }/>
    </div>
  )
}
