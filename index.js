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
        'dna': DNABase,
        mutate() {
            const newBaseIndex = Math.floor(Math.random() * this.dna.length);
            const selectedBase = this.dna[newBaseIndex];
            let newBase = selectedBase;
            while(newBase === selectedBase) {
                newBase = returnRandBase();
            }
            this.dna[newBaseIndex] = newBase;

            return this.dna;
        },
        compareDNA(pAequorObj) {
            let commonDNACounter = 0;
            for(let i = 0; i<15; ++i) {
                const pAequorBase = pAequorObj.dna[i];
                const currentpAequorBase = this.dna[i];
                commonDNACounter += pAequorBase === currentpAequorBase ? 1 : 0;
            }
            return ((commonDNACounter/15)*100).toFixed(2);
        }
        
    };
    return specimen;
}

let pAequor1 = pAequorFactory(1,mockUpStrand())
let pAequor2 = pAequorFactory(2, mockUpStrand());
console.log(pAequor1.dna);
console.log(pAequor2.dna);
console.log(pAequor1.compareDNA(pAequor2) + "% similarity");


