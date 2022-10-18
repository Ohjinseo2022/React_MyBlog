import shortId from "shortid";
import { faker } from "@faker-js/faker";
export const dummyUser = (data) => ({
  ...data,
  nickname: "오진서",
  id: 1,
  Posts: [{ id: 1 }],
});

// faker.locale = "ko";

/*jwt토큰 로그인방식 - > 모든회사에서 사용함 !!! 카카오가 뚫렸었음 
  
*/
export const createDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        name: faker.name.fullName(),
      },
      content: faker.lorem.paragraph(),
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            name: faker.name.fullName(),
          },
          contnet: faker.lorem.sentence(),
        },
      ],
    }));

export const dummyPost = (data) => ({
  id: shortId.generate(),
  User: {
    id: 1,
    nickname: "오진서",
  },
  content: data,
  Comments: [],
});

export const dummyComment = (data) => ({
  id: shortId.generate(),
  User: {
    id: 1,
    nickname: "오진서",
  },
  content: data,
});
