export default class API {

  static baseUrl = 'https://bookstore-api-server.herokuapp.com'

  static getBooks = async () => {
    const req = await fetch(this.baseUrl + '/api/books?populate=image')
    const { data } = await req.json()

    const newData = data.map((item) => {
      const { id, attributes } = item
      const { author, name, genre, price, pages, image } = attributes
      const img = this.baseUrl + image.data.attributes.url

      return { id, author, name, genre, price, pages, img }
    })

    return newData
  }
}