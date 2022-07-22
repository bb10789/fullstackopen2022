import { useState } from 'react'

const Filter = ({keyword, setNewKeyword}) => {
    const handleKeywordChange = (event) => {
        setNewKeyword(event.target.value)
      }

    return (
        <form>
            filter shown with<input value={keyword}
                onChange={handleKeywordChange} />
        </form>
    )
}

export default Filter