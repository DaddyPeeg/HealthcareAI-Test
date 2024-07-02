import axios from 'axios';

export default class API {
  baseUrl: string
  token: string

  constructor(token: string) {
    this.token = token;
    this.baseUrl = import.meta.env.VITE_BACKEND_URL || '';
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  async get(url: string, params?: any) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseUrl + url}`, {
          headers: this.getHeaders(),
          params
        })
        .then((response: any) => {
          if (response && [200, 201, 204].includes(response.status)) {
            const { data } = response
            resolve(data);
          } else {
            reject('Error')
          }
        })
      .catch(error => {
        reject(error?.response?.data || 'Unknown Error!')
      })
    })
  }

  async post(url: string, data: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.baseUrl + url}`, data, {
          headers: this.getHeaders()
        })
        .then((response: any) => {
          if (response && [200, 201, 204].includes(response.status)) {
            const { data } = response
            resolve(data);
          } else {
            reject('Error')
          }
        })
      .catch(error => {
        reject(error?.response?.data || 'Unknown Error!')
      })
    })
  }
}