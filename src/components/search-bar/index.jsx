

export default function SearchBar() {
  return (
    <form className="filter-form">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Поиск по названию"
      />
      <label >
        <input 
        type="checkbox"
        className="in-whish-list-checkbox" 
        />
        Только в списке желаемого
      </label>
    </form>
  )
}
