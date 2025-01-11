class superHeroes {
    constructor(){
        this.superheroes = new Map();
    }

    addSuperHeroe(id, name, universe, superPower, strength){
        if (this.superheroes.has(id)) {
            console.log(`El súperheroe ${id} ya existe.`);
            return;
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
      for(let i=0; i<this.superheroes.size; i++){
        var superHeroe
      }
    
    }


}


const superHeroeContainer =  new superHeroes();

superHeroeContainer.addSuperHeroe("1", "Iron Man", "Marvel", "SuperSuit", "50");
superHeroeContainer.addSuperHeroe("2", "Iron Man", "DC", "SuperSuit", "50");
superHeroeContainer.addSuperHeroe("3", "Iron Man", "Marvel", "SuperSuit", "50");
superHeroeContainer.addSuperHeroe("4", "Iron Man", "Marvel", "SuperSuit", "50");
superHeroeContainer.addSuperHeroe("5", "Iron Man", "Marvel", "SuperSuit", "50");

superHeroeContainer.buscarPorUniverso();