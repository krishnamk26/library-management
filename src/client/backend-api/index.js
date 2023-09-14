const { BookApi } = require("./book").default
const { UserApi } = require("./user")

const BackendApi = {
  book: BookApi,
  user: UserApi,
}

module.exports = { BackendApi }
