function augm1() {
document.getElementById("spadri");
spadri.value ++ ;
 let a = document.getElementById("totspadri");
 let c = document.getElementById("prix");
 let b = parseInt(a.innerHTML)
     b+=120 
    let d =parseInt(c.innerHTML)
    d+=120
     a.innerHTML=b.toString()
     c.innerHTML=d.toString()
     
}
function dimin1() {
    document.getElementById("spadri");
    if(spadri.value>0)
    {
        spadri.value -- ;
        let a = document.getElementById("totspadri");
        let c = document.getElementById("prix");
        let b = parseInt(a.innerHTML)
            b-=120 
            let d =parseInt(c.innerHTML)
            d-=120
             a.innerHTML=b.toString()
             c.innerHTML=d.toString()
    }

         
       
    
}
function augm2() {
    document.getElementById("klasset");
    klasset.value ++ ;
    let a = document.getElementById("totklasset");
    let c = document.getElementById("prix");
    let b = parseInt(a.innerHTML)
    b+=20 
   let d =parseInt(c.innerHTML)
   d+=20
    a.innerHTML=b.toString()
    c.innerHTML=d.toString()
    }
    function dimin2() {
        document.getElementById("klasset");
        if(klasset.value>0)
        {
            klasset.value -- ;
            let a = document.getElementById("totklasset");
            let c = document.getElementById("prix");
            let b = parseInt(a.innerHTML)
                b-=20 
                let d =parseInt(c.innerHTML)
                d-=20
                 a.innerHTML=b.toString()
                 c.innerHTML=d.toString()
        }

        
    }
    function augm3() {
        document.getElementById("kartaba");
        kartaba.value ++ ;
        let a = document.getElementById("totkartaba");
        let c = document.getElementById("prix");
        let b = parseInt(a.innerHTML)
        b+=80
       let d =parseInt(c.innerHTML)
       d+=80
        a.innerHTML=b.toString()
        c.innerHTML=d.toString()
        }
        function dimin3() {
            document.getElementById("kartaba");
            if (kartaba.value>0){
                kartaba.value -- ;
                let a = document.getElementById("totkartaba");
                let c = document.getElementById("prix");
                let b = parseInt(a.innerHTML)
                b-=80
               let d =parseInt(c.innerHTML)
               d-=80
                a.innerHTML=b.toString()
                c.innerHTML=d.toString()
            }
 
            }
            
        