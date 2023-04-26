import { faker } from "@faker-js/faker";

export const contestantData = [...Array(20)].map((_, index) => ({
  contestantId: faker.datatype.uuid(),
  contestantNumber: index + 1,
  contestantFirstName: faker.name.firstName(),
  contestantMiddleName: faker.name.lastName(),
  contestantLastName: faker.name.lastName(),
  contestantAge: faker.datatype.number({ min: 18, max: 30 }),
  contestantHomeTown: faker.address.country(),
  contestantBio: faker.lorem.text(),
}));
