import axios from "axios";

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8000/api/v1',
    });

    this.instance.interceptors.request.use((req) => {
      req["x_token"] = 'secret_token_header';

      return req;
    });

    this.instance.interceptors.response.use(
      function (res) {
        return res;
      },
      function (error) {
        return error;
      }
    );
  }

  get(endpoint, params = {}, config = {}) {
    return this.instance
      .get(endpoint, {
        ...config,
        params,
      })
      .catch((error) => {
        console.error(error, config);
        return error.response;
      });
  }

  delete(endpoint, data = {}, config) {
    return this.instance
      .delete(endpoint, { ...config, data })
      .catch((error) => {
        console.error(error, config);
        return error.response;
      });
  }

  post(endpoint, data = {}, config) {
    return this.instance.post(endpoint, data, config).catch((error) => {
      console.error(error, config);
      return error.response;
    });
  }

  put(endpoint, data = {}, config) {
    return this.instance.put(endpoint, data, config).catch((error) => {
      console.error(error, config);
      return error.response;
    });
  }
}

const API = new Api();

export default API;
