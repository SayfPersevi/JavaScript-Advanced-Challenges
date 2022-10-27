function showRating(stars) {
let rating = "";

for (let i = 0; i < Math.floor(stars); ++i) {
    rating += "*"
    if (i !== Math.floor(stars) - 1) {
        rating += " "
    }
}
if (!Number.isInteger(stars)) {
    rating += " ."
}
return rating

}

console.log(showRating(4))