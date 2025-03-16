export const getUser = () => {
  return new Promise((relsove) => {
    setTimeout(() => {
      relsove({
        data: {
          name: "Nguyen Tuan Anh",
          age: 18,
        },
        status: 200,
      });
    }, 1500);
  });
};
