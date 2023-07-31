import searchFilters from "./searcher";

const d = documents;

d.addEventListener("DOMContentLoaded", e=>{
    searchFilters(".card-filter",".card");
});