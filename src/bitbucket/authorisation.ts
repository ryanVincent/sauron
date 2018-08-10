export default (username: string, password: string) => {
    return new Buffer(
      `${username}:${password}`
    ).toString('base64');
}
