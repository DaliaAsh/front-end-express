const cards = Array.from (document.getElementsByClassName("card"));
cards.map((card:HTMLDivElement)=>{
    card.addEventListener("click", (event)=>{
       showPage(card.id); 
    })
});

const showPage=(pageName:string)=> {
    window.location.pathname=`/public/${pageName}.html`;
    
}