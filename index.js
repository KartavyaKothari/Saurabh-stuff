quitiitb=()=>{
    setTimeout( function() {
        document.querySelector("#saunav").remove();
        setTimeout( function() {
            document.querySelector("#sautable").remove();
            setTimeout( function() {
                document.querySelector("#saujumbo").remove();
            }, 1000);
        }, 1000);
    }, 500);
}