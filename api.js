const getRepo = async (word) => {
    const request = await fetch(`https://api.github.com/search/repositories?q=${word}&per_page=5`)
    const response = await request
    if (response.ok) {
        const data = await response.json()
        const items = await data.items
        clearDropdown()
        items.forEach(view)
    } else {
        errorResponse()
    }
}
