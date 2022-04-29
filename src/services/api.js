export default class API {

  static baseUrl = process.env.NODE_ENV === 'production' ? 'https://bookstore-api-server.herokuapp.com' : 'http://localhost:1337'

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

  static register = async (email, username, password, cart) => {
    const body = { email, username, password }

      const req = await fetch(this.baseUrl + `/api/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })

      const data = await req.json()
      const newReq = await API.udpateCart(data.jwt, cart)

      return { jwt: data.jwt, user: newReq }

  }

  static getUser = async (jwt) => {

    const req = await fetch(this.baseUrl + `/api/users/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })

    const data = await req.json()

    if (req.status !== 200)
      throw new Error(data.error.message)

    return data
  }

  static udpateCart = async (jwt, cart) => {

    const body = {
      cart
    }
    const req = await fetch(this.baseUrl + `/api/users/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
        'Host': '<calculated when request is sent>',
        'User-Agent': 'BookStore',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify(body)
    })

    const data = await req.json()

    if (req.status !== 200)
      throw new Error(data.error.message)

    return data
  }

  static udpateCards = async (jwt, cards) => {
    const body = {
      cards
    }
    const req = await fetch(this.baseUrl + `/api/users/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
        'Host': '<calculated when request is sent>',
        'User-Agent': 'BookStore',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify(body)
    })

    const data = await req.json()

    if (req.status !== 200)
      throw new Error(data.error.message)

    return data
  }

  static updateAddresses = async (jwt, addresses) => {
    const body = {
      addresses
    }
    const req = await fetch(this.baseUrl + `/api/users/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
        'Host': '<calculated when request is sent>',
        'User-Agent': 'BookStore',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify(body)
    })

    const data = await req.json()

    if (req.status !== 200)
      throw new Error(data.error.message)

    return data
  }
}