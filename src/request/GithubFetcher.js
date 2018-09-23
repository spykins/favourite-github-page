import axios from 'axios';
import RepositoryModel from '../util/RepositoryModel'
let TOKEN = process.env.REACT_APP_API_KEY;

//https://github.com/axios/axios#cancellation

/**
 * @class GithubFetcher fetch information from Github api base on the input into the 
 * @see ../components/searchInput.js field
 * response to the action through a component that manages making request and cancellation when the component unmounts
 * 
 * @author Akinsanmi Waleola
 */
export default class GithubFetcher {
    constructor() {
        this.signal = axios.CancelToken.source();
    }

    async makeRequest (nameOfRepositoryToSearch) {
        let repositories = await this.makeCallToGetRepository(nameOfRepositoryToSearch);
        repositories = repositories.items;
        let tenRepositories = [];
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

                    let repo = repositories[i];

                    tenRepositories.push( 
                        new RepositoryModel.Builder(repo.name)
                            .withOwner(repo.owner.login)
                            .withUrl(repo.html_url)
                            .withLanguage(repo.language)
                            .withId(repo.node_id)
                            .withTag(repo.tag)
                            .build()
                    
                    ); 
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
                        headers: {
                            Authorization : `token ${TOKEN}`
                          }
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
                        headers: {
                            Authorization : `token ${TOKEN}`
                          }
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