import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  marketContent(): string {
    return `
      <div>
        <h1>${this.name}</h1>
      </div>
    `;
  }
}
