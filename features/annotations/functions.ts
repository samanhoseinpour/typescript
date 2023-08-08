const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

// Destructring annotations
const todayWeather = {
  date: new Date(),
  today: 'sunny',
};

const logWeather = ({ date, today }: { date: Date; today: string }): void => {
  console.log(date.getDay(), today);
};

logWeather(todayWeather);

// Objects annotations
const profile = {
  name: 'saman',
  age: 21,
  deegre: {
    university: 'IAU',
    type: 'bachelor',
    duration: 3,
  },

  setAge(age: number) {
    this.age = age;
  },
};

const destructureProfile = ({
  name,
  age,
}: {
  name: string;
  age: number;
}): void => {
  console.log(name, age);
};

destructureProfile(profile);

const { age }: { age: number } = profile;
const {
  university,
  type,
  duration,
}: { university: string; type: string; duration: number } = profile.deegre;
console.log(age);
console.log(university, type, duration);
