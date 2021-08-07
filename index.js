// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

const pAequorFactory = (organismNumber, DNABase) => {
    const specimen = {
        'specimenNum' : organismNumber,
        'dna': DNABase
    };
    return specimen;
}

let pAequor = pAequorFactory(1,mockUpStrand())

pAequor.mutate = function() {
    const newBaseIndex = Math.floor(Math.random() * this.dna.length);
    const selectedBase = this.dna[newBaseIndex];
    let newBase = selectedBase;
    while(newBase === selectedBase) {
        newBase = returnRandBase();
    }
    this.dna[newBaseIndex] = newBase;

    return this.dna;
}


