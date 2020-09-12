function Jedi(name, rank, saberColor) {
    this.name = name;
    this.rank = rank;
    this.saberColor = saberColor;
    this.forceShield = function() {
        console.log('force shield bziiiit');
    }
}


let quigon = new Jedi('quigon','master','green');

function JediMaster(name, rank, saberColor) {
    Jedi.call(this, name, rank, saberColor);
    this.padawan = 'anakin';
}

let obiwan = new JediMaster('obiwan', 'master', 'blue');