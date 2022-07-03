import { WebView, logError } from 'alt-client';
import ViewAlreadyCreatedError from './viewAlreadyCreatedError';
import ViewNotYetCreatedError from './viewNotYetCreatedError';

interface ViewData {
  url: string;
  overlay?: boolean;
}

export class View {
  private view?: WebView;

  constructor(private readonly viewData: ViewData) {
    this.viewData = viewData;
  }

  public emit(eventName: string, ...args: any[]): void {
    if (!this.view) {
      throw new ViewNotYetCreatedError(this.viewData.url);
    }

    alt.emit(eventName, ...args);
  }

  public on(eventName: string, listener: (...args: any[]) => void): void {
    if (!this.view) {
      throw new ViewNotYetCreatedError(this.viewData.url);
    }

    this.view.on(eventName, listener);
  }

  public off(eventName: string, listener: (...args: any[]) => void): void {
    if (!this.view) {
      throw new ViewNotYetCreatedError(this.viewData.url);
    }

    this.view.off(eventName, listener);
  }

  public open(): void {
    if (this.view) {
      throw new ViewAlreadyCreatedError(this.viewData.url);
    }

    const { url, overlay } = this.viewData;

    try {
      this.view = new WebView(url, overlay);
      this.hide();

      this.view.on("load", () => {
        this.show();
      });
    } catch (e) {
      logError(e);
    }
  }

  public close(): void {
    if (!this.view) {
      throw new ViewNotYetCreatedError(this.viewData.url);
    }

    this.view.destroy();
  }

  public show(): void {
    if (!this.view) {
      throw new ViewNotYetCreatedError(this.viewData.url);
    }

    this.view.isVisible = true;
  }

  public hide(): void {
    if (!this.view) {
      throw new ViewNotYetCreatedError(this.viewData.url);
    }

    this.view.isVisible = false;
  }
}