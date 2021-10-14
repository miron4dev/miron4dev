export default class Contact {
  readonly url: string;
  readonly name: string;
  readonly logo: string;

  constructor(url: string, name: string, logo: string) {
    this.url = url;
    this.name = name;
    this.logo = logo;
  }
}
