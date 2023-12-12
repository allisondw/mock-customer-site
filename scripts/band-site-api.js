class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://project-1-api.herokuapp.com";
    }
    
    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
        console.log(error);
        };
        
    };
    
    async getComments() {
       try {
           const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            return response.data.sort((a, b) => b.timestamp - a.timestamp);
        } catch (error) {
            console.log(error);
        };
        
    };

    async postComments(comment) {
        try {
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment)
            return response.data;
        } catch (error) {
            console.log(error);
        };
    }
};


const myBandSiteApi = new BandSiteApi("ea8b87bc-3a06-4146-9354-26e9ff720bf7");

