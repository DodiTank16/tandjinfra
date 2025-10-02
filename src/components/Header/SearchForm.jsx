function SearchForm({ active }) {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted");
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`search-form${active ? " active" : ""}`}>
      <input type="search" placeholder="Search here" id="search-box" />
      <button type="submit" aria-label="Search">
        <label for="search-box" class="fas fa-search"></label>
      </button>
    </form>
  );
}

export default SearchForm;
