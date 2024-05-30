const fs = require('fs');
const { cwd } = require('process');
function readFileAsync(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function formatPokemonData(data){
      let result=[];
    
     // console.log('>>Data', Array.from(data).slice(0,6));
     return result=Object.entries(data).reduce((acc, pair)=>{
        let [key, value]=pair;
        console.log('key', key, 'ACC>>>', typeof acc);
        acc.push({
            name:key,
            type:value['Type'],
            species:value['Species'],
            height:value['Height'],
            weight:value['Weight'],
            gender:value['Gender'],
            hpBase:value['HP Base'],
            attackBase:value['Attack Base'],
            defenseBase:value['Defense Base'],
            specialAttackBase:value['Special Attack Base'],
            speedBase:value['Speed Base'],
            baseExp:value['Base Exp'],
        })
        return acc;
        
      }, [])  
}

const fetchData = async () => {
    try {
        const response = await readFileAsync(process.cwd()+'/app/lib/pokemonDB_dataset.json');
        const data = await JSON.parse(response);
        
        let obj = data;
        console.log('>>obj',typeof obj);
        //console.log(Object.values(obj));
        //console.log(Object.entries(obj))
        console.log('>>Format pokemons', formatPokemonData(obj));
        
        return Array.from(obj);
    } catch (err) {
        console.error('Failed to load pokemon data from file: ', err);
    }
};

const pokemonsData=fetchData();

   


    module.exports={
        pokemonsData
    }

