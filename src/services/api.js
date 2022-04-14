export default class API {

  static baseUrl = 'https://bookstore-api-server.herokuapp.com'

  static getBooks = async () => {
    const req = await fetch(this.baseUrl + '/api/books?sort=id:asc&populate=image,genres,authors')
    const { data } = await req.json()

    return data
  }
}