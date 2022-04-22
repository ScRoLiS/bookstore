export default class API {

  static baseUrl = 'https://bookstore-api-server.herokuapp.com'
  // static baseUrl = 'http://localhost:1337'


  static getBooks = async () => {
    const req = await fetch(this.baseUrl + `/api/books?sort=id:asc`)
    const { data } = await req.json()

    return data
  }

  static getBook = async (id) => {
    const req = await fetch(this.baseUrl + `/api/books/${id}`)
    const { data } = await req.json()

    return { ...data, id: parseInt(data.id) }
  }

  static login = async (email, password) => {
    const body = {
      identifier: email,
      password
    }

    const req = await fetch(this.baseUrl + `/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await req.json()

    if (req.status !== 200)
      throw new Error(data.error.message)

    return data
  }

  static register = async (email, username, password) => {
    const body = { email, username, password }
    const req = await fetch(this.baseUrl + `/api/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })

    const data = await req.json()

    if (req.status !== 200)
      throw new Error(data.error.message)

    return data
  }

  static setCartOnServer = async (cart) => {
    const req = await fetch(this.baseUrl + `/api/users/me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
    const { data } = await req.json()

    return { ...data, id: parseInt(data.id) }
  }
}