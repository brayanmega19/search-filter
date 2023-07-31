
const d = document;
export default function searchFilters(input, selector){

    
    d.addEventListener("keyup", e=>{
        
        if(e.target.matches(input)){

            if(e.target.key === "Escape") e.target.value = "";
            let search = e.target.value.toLowerCase();

            d.querySelectorAll(selector).forEach(el => {
                
                el.querySelector("h2").textContent.toLowerCase().includes(search)?
                el.classList.remove("filter"):
                el.classList.add("filter")
            
            });
        }
    });

}