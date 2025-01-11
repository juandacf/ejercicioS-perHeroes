class superHeroes {
    constructor(){
        this.superheroes = new Map();
    }

    addSuperHeroe(id, name, universe, superPower, strength){
      if (this.superheroes.has(id)){
        console.log("Ya existe un súperheroe inscrito con esta ID.")
      }else {
            this.superheroes.set(id, {
              "name":name,
              "universe": universe,
              "superPower":superPower,
              "strength": strength });
            }
    }
    buscarSuperheroePorID(id){
      if (this.superheroes.has(id)){
        const superHeroeChosen = this.superheroes.get(id);
        console.log(
          `Los datos del Súper Heroe escogido son:

          Nombre = ${superHeroeChosen["name"]}
          Universo =  ${superHeroeChosen["universe"]}
          Súper poder = ${superHeroeChosen["superPower"]}
          Fuerza = ${superHeroeChosen["strength"]}
          `
        )
      } else {
        console.log("Este súper heroe no existe.")
      }
    }
    buscarPorUniverso(universe) {
      console.log(`La lista de súperheroes del universo ${universe} es: `)
      for(let i=1; i<=this.superheroes.size; i++){
        var superHeroe = this.superheroes.get(i);
        if (superHeroe["universe"]== universe){
          console.log(`nombre: ${superHeroe["name"]} `);
        }
      }
    
    }
    actualizarFuerza(id, nuevaFuerza){
      if (this.superheroes.has(id)){
        console.log(`La antigua fuerza de ${this.superheroes.get(id)["name"]} era ${this.superheroes.get(id)["strength"]}. Esta ha sido actualizada a ${nuevaFuerza}`);
        this.superheroes.get(id)["strength"]=nuevaFuerza;
      } else {
        console.log("Este súperheroe no existe.");
      }
    }
    eliminarSuperheroe(id){
      if (this.superheroes.has(id)){
        console.log(`El súper heroe ${this.superheroes.get(id)['name']} ha sido borrado con éxito.`)
        this.superheroes.delete(id);
      } else {
        console.log("El id ingresado no corresponde con ningún súper heroe registrado.");
      }
    }
    mostrarSuperHeroes(){
      console.log("Los héroes disponibles son:")
      for (let i=1; i<=this.superheroes.size; i++){
        console.log(this.superheroes.get(i)["name"]);
      }
    }
    superheroeMasFuerte(){
      var maxValue = 0
      var superHeroeID = 0
      for(let i=1; i<=this.superheroes.size; i++){
        if(maxValue< this.superheroes.get(i)["strength"]){
          maxValue = this.superheroes.get(i)["strength"];
          superHeroeID= i;
        }else{
          continue
        }
      }
      console.log(`El súperheroe más fuerte es ${this.superheroes.get(superheroeID)["name"]} con una fuerza de ${this.superheroes.get(superHeroeID)["strength"]}`)
    }
}


const superHeroeContainer =  new superHeroes();

superHeroeContainer.addSuperHeroe(1,"Iron Man", "Marvel", "SuperSuit", 50);
superHeroeContainer.addSuperHeroe(2, "Batman", "DC", "Wealth", 26);
superHeroeContainer.addSuperHeroe(3, "Aquaman", "DC", "Breathe in water", 40);
superHeroeContainer.addSuperHeroe(4,"SpiderMan", "Marvel", "Spidersense", 70);
superHeroeContainer.addSuperHeroe(5,"Thor", "Marvel", "Hammer", 80);


superHeroeContainer.superheroeMasFuerte();


