import alt from 'alt-client';

import { LoginDto, LoginEvents } from '../../../shared/login';
import { View } from '../../view/view';

const url = 'resources/core/client/views/login/login.html';

export class LoginService {
  private readonly view: View

  constructor() {
    this.view = new View({ url, overlay: true });
    this.view.open();

    this.view.on('Login:TryLogin', this.tryLogin);
  }

  public tryLogin(data: LoginDto): void {
    alt.emitServer(LoginEvents.TryLogin, data);
  }

  public close() {
    try {
      this.view.close();
    } catch (e) {
      alt.logError(e);
    }
  }
}