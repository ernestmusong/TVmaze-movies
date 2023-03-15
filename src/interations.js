import SHOWS from "./home.js";
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appsEndPoint = '/apps/';
const likesEndPoint = '/likes/';
const id = 'sRPHgjJhQMGqpfqhsriS'

export default class INTERACTIONS {
    static createAppId = async () => {
        try {
            const response = await fetch(baseUrl + appsEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await response.text();
            console.log(data)
            return data;
          } catch (error) {
            return error;
          }
      }
    
      static createNewLike = async (itemId) => {
        try {
          const response = await fetch(baseUrl + appsEndPoint + id + likesEndPoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
    
            body: JSON.stringify({
                item_id: itemId
            }),
          });
          const data = await response.text();
          console.log(data)
          return data;
        } catch (error) {
            console.log(error)
          return error;
        }
      }
    
      static getLikes = async () => {
        try {
          const response = await fetch(baseUrl + appsEndPoint + id + likesEndPoint, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
    
          });
          const data = await response.json();
          console.log(data)
          return data;
        } catch (error) {
            console.log(data)
          return error;
        }
      }
}