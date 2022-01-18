import axios from "axios";

const config = {
    baseUrl: 'https://www.googleapis.com/youtube/v3/',
    key: 'AIzaSyCZJwDypJXsVWrNt_cfM3Qb0G_yTQXdT58'
}

    function getVideoList(){
        return axios.get(`${config.baseUrl}videos`, {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
                key: config.key,
                // regionCode:'KR',
            }
        })
    }

    function searchVideoListApi(searchKeyword){
        return axios.get(`${config.baseUrl}search`, {
            params: {
                part: 'snippet',
                maxResults: 25,
                key: config.key,
                q: searchKeyword,
            }
        })
    }

export {
    getVideoList,
    searchVideoListApi,
}

