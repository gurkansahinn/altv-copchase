import { PlayerCredentials } from "../../domain/player/player";

export default interface Repo {
  login(username: string, hashedPassword: string): Promise<PlayerCredentials>;
}