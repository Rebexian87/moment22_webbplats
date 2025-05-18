
      
"use strict"  


//let data= [];

//let submEl=
 
window.onload = init;
function init () {
         getData() //När sidan startar så anropas funktionen getData()
        document.getElementById("submits").addEventListener("click", createWorkexperience);

    


   
}
     
       
     //   submEl.addEventListener("click", createWorkexperience())


        async function getData() {
            const response = await fetch ("http://127.0.0.1:3000/api/workexperiences")
            
            const data = await response.json();
            displayData(data)
            
            console.log(data);
            
        }

        
        function displayData(data) {

            let expEl = document.getElementById ("erfarenhet");
                expEl.innerHTML="";

              data.forEach(exp => {  //Loopar igenom kurser
                expEl.innerHTML += `<li>${exp.companyname}, ${exp.jobtitle}, ${exp.location}</li> `}); } //Skapar innehåll till lista
        

        
        

        


      async function createWorkexperience (companyname, jobtitle, location){
            let companynameEl=document.getElementById("companyname")
            let jobtitleEl=document.getElementById("jobtitle")
            let locationEl=document.getElementById("location")

            companyname=companynameEl.value
            jobtitle=jobtitleEl.value
            location=locationEl.value

            let workexperience = {  
            companyname: companyname,
            jobtitle: jobtitle,
            location:location
            }

            const response = await fetch ("http://127.0.0.1:3000/api/workexperiences", {
                method: "POST",
                headers: {
                    "content-type": "Application/json"
                },
                body: JSON.stringify(workexperience)
            })
            const data= await response.json();
            console.log(data);
            
        }





        

                            


 