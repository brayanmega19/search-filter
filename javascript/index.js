import searchFilters from "./searcher.js";

const d = document;
console.log("Hello");
d.addEventListener("DOMContentLoaded", e=>{
    searchFilters(".card-filter",".card");
});