export default class API {

  static baseUrl = process.env.NODE_ENV === 'production' ? 'https://bookstore-api-server.herokuapp.com' : 'http://localhost:1337'

  static headers = {
    'Content-Type': 'application/json',
    'Content-Length': '<calculated when request is sent>',
    'Host': '<calculated when request is sent>',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive'
  }

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
      headers: API.headers,
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
      headers: API.headers,
      body: JSON.stringify(body)
    })

    const data = await req.json()
    let newReq = data

    if (data.jwt)
      newReq = await API.udpateCart(data.jwt, cart)

    return { jwt: data.jwt, user: newReq }

  }

  static getUser = async (jwt) => {

    const req = await fetch(this.baseUrl + `/api/users/me`, {
      method: 'PUT',
      headers: {
        ...API.headers,
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
        ...API.headers,
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
        ...API.headers,
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
        ...API.headers,
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify(body)
    })

    const data = await req.json()

    if (req.status !== 200)
      throw new Error(data.error.message)

    return data
  }

  static sendPurchases = async (jwt, purchases) => {
    const body = {
      purchases
    }
    const req = await fetch(this.baseUrl + `/api/users/me`, {
      method: 'PUT',
      headers: {
        ...API.headers,
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