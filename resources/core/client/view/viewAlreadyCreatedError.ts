export default class ViewAlreadyCreatedError extends Error {
  constructor(url: string) {
    super(`View ${url} already created.`);
  }
}