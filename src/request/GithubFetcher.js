import axios from 'axios';


export default class GithubFetcher {
    constructor() {
        this.signal = axios.CancelToken.source();
    }

    async makeRequest (nameOfRepositoryToSearch) {
        try {
            const {data} = await axios.get(`https://api.github.com/search/repositories?q=${nameOfRepositoryToSearch}+language:assembly&sort=stars&order=desc`, 
                {
                        cancelToken: this.signal.token,
                });

            return data;
          } catch (error) {
            console.log (error);
          }

    }

    cancelRequest () {
        this.signal.cancel("request has been cancelled");
    }

}