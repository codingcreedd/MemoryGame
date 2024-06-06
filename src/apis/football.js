const getFootballData = async (apiKey, teamID) => {
    try{
        const url = `https://api.football-data.org/v2/teams/${teamID}`;
        const headers = {
            'X-Auth-Token': apiKey
        };

        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
            mode: 'cors'
        });

        const data = await response.json();
        return data;
    }catch(error){
        console.error('Error: ', error);
    }
}

export default getFootballData;