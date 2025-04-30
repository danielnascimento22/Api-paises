let card = document.getElementById('card').style.setProperty('display', 'none','important')

function procurar(){
    let card =document.getElementById('card').style.setProperty('display','block','important')
    let pais = document.getElementById('pais').value
    let finalurl = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalurl)
    fetch(finalurl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
       console.log(data[0]) 
       console.log(data[0].flags)
       console.log(data[0].population) 
       console.log(data[0].capital[0]) 
       console.log(data[0].continents[0]) 

       let bandeira = document.getElementById('bandeira')
       let nome = document.getElementById('nome')
       let capital = document.getElementById('Cap')
       let continents = document.getElementById('Cont')
       let = population = document.getElementById('Pop')

        nome.innerHTML = pais
        capital.innerHTML = data[0].capital
        continents.innerHTML = data[0].continents[0]
        population.innerHTML = data[0].population
        bandeira.src = data[0].flags.svg

    })

}
