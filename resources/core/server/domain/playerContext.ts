import { injectable } from "tsyringe";
import { LoginDto } from "../../shared/login";
import { LoginService } from "./player/login";
import { PlayerCredentials } from "./player/player";

@injectable()
export class PlayerContext {
  constructor(private readonly loginService: LoginService) {
    this.loginService = loginService;
  }

  login(data: LoginDto): Promise<PlayerCredentials> {
    return this.loginService.tryLogin(data);
  }
}