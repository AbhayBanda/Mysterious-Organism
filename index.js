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
        },
        willLikelySurvive() {
            let cBaseCounter = 0;
            let gBaseCountr = 0;
            this.dna.forEach((base) => {
                if(base === 'C') cBaseCounter++;
                else if(base === 'G') gBaseCountr++;
            });
            const cBasePercentage = (cBaseCounter/15) * 100;
            const gBasePercentage = (gBaseCountr/15) * 100;
            const likelyToSurvive = cBasePercentage >=60 || gBasePercentage >=60
            return likelyToSurvive;
        },
        complementStrand() {
            let newStrand = [];
            this.dna.forEach(base => {
                switch(base) {
                    case 'A':
                        newStrand.push('T');
                        break;
                    case 'T':
                        newStrand.push('A');
                        break;
                    case 'C':
                        newStrand.push('G');
                        break;
                    case 'G':
                        newStrand.push('C');
                        break;
                    default:
                        newStrand.push(returnRandBase());
                        break;
                }
            })
            return pAequorFactory(Math.floor(Math.random()*100), newStrand)
        }
        
    };

    return specimen;
}


let pAequorInstances = [];
const speciesNum = 1;
for(let i = 0 ; i<30; ++i) {
    const pAequor = pAequorFactory(speciesNum,mockUpStrand());
    if(pAequor.willLikelySurvive()) {
        pAequorInstances.push(pAequor);
    }
    else --i;
}






