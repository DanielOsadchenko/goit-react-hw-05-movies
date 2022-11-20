import { useState } from "react"


export const SearchForm = ({onSubmit}) => {
  const [inputQuery, setInputQuery] = useState('');

    const handleChange = (e) => {
    setInputQuery(e.target.value)
  }

  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputQuery)
    setInputQuery('')
  }
  return <form onSubmit={formSubmit}>
      <label>
        <input
          name="query"
          placeholder="write the name of the movie here"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={inputQuery}></input>
      </label>
      <button type="submit">Search</button>
    </form>
}