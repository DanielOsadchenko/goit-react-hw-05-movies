import { useState } from "react";
import { Input, Button, Form } from "./SearchForm.styled";


export const SearchForm = ({onSubmit, }) => {
  const [inputQuery, setInputQuery] = useState('');

    const handleChange = (e) => {
    setInputQuery(e.target.value)
  }

  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputQuery);
  }
  return <Form onSubmit={formSubmit}>
      <label>
        <Input
          name="query"
          placeholder="write the name of the movie here"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={inputQuery}></Input>
      </label>
      <Button type="submit">Search</Button>
    </Form>
}