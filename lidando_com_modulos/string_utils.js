//just gets a word and capitalize, if the string is empty returns ""
const capitalize = word => (word && word[0].toUpperCase() + word.slice(1)) || ""

module.exports = {capitalize}