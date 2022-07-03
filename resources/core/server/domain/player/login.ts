import { LoginDto } from '../../../shared/login';
import { PlayerCredentials } from '../player/player';
import { injectable } from "tsyringe";
import Repo from '../../infrastructure/repo/repo';

@injectable()
export class LoginService {
  private readonly repo: Repo;

  constructor(repo: Repo) {
    this.repo = repo;
  }

  public tryLogin(_data: LoginDto): Promise<PlayerCredentials> {
    throw new Error("Method not implemented.");
  }
}