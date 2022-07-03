export default class PlayerAlreadyLoggedError extends Error {
  constructor(username: string) {
    super(`Player ${username} already logged.`);
  }
}