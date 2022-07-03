export default class ViewNotYetCreatedError extends Error {
  constructor(url: string) {
    super(`View ${url} not yet created.`);
  }
}