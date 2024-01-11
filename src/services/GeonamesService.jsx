import ApiService from '../helpers/http/apiService';
import { responseCatcher } from '../helpers/http/response';

class GeonamesService {
  constructor(apiBaseUrl = "http://api.geonames.org", username = "surecoder") {
    this.api = new ApiService(apiBaseUrl);
    this.username = username;
  }

  getCountries() {
    return this.api.getWithOutToken(`/countryInfoJSON?username=${this.username}`)
      .then(data => data.geonames)
      .catch(error => {
        console.error('Error fetching countries:', error);
        throw error;
      });
  }

  getStates(countryGeonameId) {
    return this.api.getWithOutToken(`/childrenJSON?username=${this.username}&geonameId=${countryGeonameId}`)
      .then(data => data.geonames)
      .catch(error => {
        console.error('Error fetching states:', error);
        throw error;
      });
  }

  getCities(stateGeonameId) {
    return this.api.getWithOutToken(`/childrenJSON?username=${this.username}&geonameId=${stateGeonameId}`)
      .then(data => data.geonames)
      .catch(error => {
        console.error('Error fetching cities:', error);
        throw error;
      });
  }
}

export default GeonamesService;
