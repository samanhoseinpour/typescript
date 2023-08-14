import { faker } from '@faker-js/faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  marketContent(): string {
    return `
      <div>
        <h1>${this.companyName}</h1>
        <h1>${this.catchPhrase}</h1>
      </div>
    `;
  }
}
