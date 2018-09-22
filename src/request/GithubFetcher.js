import axios from 'axios';
import RepositoryModel from '../util/RepositoryModel'

//https://github.com/axios/axios#cancellation

export default class GithubFetcher {
    constructor() {
        this.signal = axios.CancelToken.source();
    }

    async makeRequest (nameOfRepositoryToSearch) {
        let repositories = await this.makeCallToGetRepository(nameOfRepositoryToSearch);
        repositories = repositories.items;
        let tenRepositories = [];
        console.log(repositories);
        if (repositories) {
            for (let i = 0, j = repositories.length; i < j; i++ ) {
                if (i === 10) {
                    break;
                }
                let theLatestTag = await this.makeCallToGetLatestTag(repositories[i])
                if (theLatestTag) {
                    if (theLatestTag.length > 0) {
                        repositories[i]["tag"] = theLatestTag[0].name;
                    } else {
                        repositories[i]["tag"] = "";
                    }
                    tenRepositories.push(new RepositoryModel(repositories[i])); 
                }
            }
        }  
        
        return tenRepositories;

    }

    async makeCallToGetLatestTag(repository) {
        try {
            const {data} = await axios.get(repository.tags_url, 
                {
                        cancelToken: this.signal.token,
                });
            return data;
          } catch (error) {
            console.log (error);
          }

    }

    async makeCallToGetRepository(nameOfRepositoryToSearch) {
        try {
            const {data} = await axios.get(`https://api.github.com/search/repositories?q=${nameOfRepositoryToSearch}`, 
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