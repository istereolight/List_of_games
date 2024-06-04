

export default function SearchBar({
  filterText = '',
  inWhishListOnly = false,
  setFilterText = () => null,
  setInWhishListOnly = () => null

}) {
  return (
    <form className="filter-form">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Поиск по названию"
        value={ filterText }
        onChange={ (event) => setFilterText(event.target.value) }
      />
      <label >
        <input 
        type="checkbox"
        className="in-whish-list-checkbox" 
        value={ inWhishListOnly }
        onChange={ (event) => setInWhishListOnly(event.target.checked) }
        />
        Только в списке желаемого
      </label>
    </form>
  )
}
