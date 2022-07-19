
const Filter = ({ keyword, setKeyword }) => {

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value)
    }
    return (
        <div>
            <form>
                find countries
                <input type="text" value={keyword} onChange={handleKeywordChange} ></input>
            </form>
        </div>

    )

}

export default Filter