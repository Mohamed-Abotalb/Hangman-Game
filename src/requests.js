// create a function getPuzzle return promise with the puzzle and word count using fetch and async/await
const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error ('Unable to fetch a puzzle');
    }
}

export {getPuzzle as default}