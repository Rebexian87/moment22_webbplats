
        
        getData()


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


                            


 