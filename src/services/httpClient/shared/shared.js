import { getPlanet } from "../planets/planet";
import { getSpecie } from "../species/specie";
import { getStarship } from "../starships/starship";


export const fetchAPIData = (currentCharacter) => {

    if (!currentCharacter.name) {
        return Promise.reject();
    }

    const { species, starships, homeworld } = currentCharacter;

    const promises = [getHomeWorld(homeworld), getSpecies(species), getStarships(starships)];

    return Promise.all(promises)
        // .then(([homeworld, species, starships]) => this.setState({
        //     homeworld,
        //     species: species.map(specie => `${specie.name} `),
        //     starships: starships.map(starship => `${starship.name} `)
        // })
        .then(([homeworld, species, starships]) => ({ homeworld, species, starships }))
}

const getHomeWorld = (homeworld) => getPlanet(homeworld);

const getSpecies = (species) => {
    const promises = species.map(specie => getSpecie(specie));
    return Promise.all(promises);
};

const getStarships = (starships) => {
    const promises = starships.map(starship => getStarship(starship));
    return Promise.all(promises);
};

