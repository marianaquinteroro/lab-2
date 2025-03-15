import { faker } from "https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm";

export const data = [
    {
        img: "https://picsum.photos/800/450?random=1",
        category: faker.commerce.department(),
        title: faker.lorem.paragraphs(1),
        desc: faker.lorem.paragraphs(1),
        userImg: faker.image.avatar(),
        userName: faker.person.fullName(),
        date: faker.date.recent().toLocaleDateString('es-ES'),
    },
    {
        img: "https://picsum.photos/800/450?random=2",
        category: faker.commerce.department(),
        title: faker.lorem.paragraphs(1),
        desc: faker.lorem.paragraphs(1),
        userImg: faker.image.avatar(),
        userName: faker.person.fullName(),
        date: faker.date.recent().toLocaleDateString('es-ES'),
    },
    {
        img: "https://picsum.photos/800/450?random=3",
        category: faker.commerce.department(),
        title: faker.lorem.paragraphs(1),
        desc: faker.lorem.paragraphs(1),
        userImg: faker.image.avatar(),
        userName: faker.person.fullName(),
        date: faker.date.recent().toLocaleDateString('es-ES'),
    },
    {
        img: "https://picsum.photos/800/450?random=4",
        category: faker.commerce.department(),
        title: faker.lorem.paragraphs(1),
        desc: faker.lorem.paragraphs(1),
        userImg: faker.image.avatar(),
        userName: faker.person.fullName(),
        date: faker.date.recent().toLocaleDateString('es-ES'),
    }
]