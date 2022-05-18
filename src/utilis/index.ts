// export function randomColor() {
//   var x = Math.floor(Math.random() * 256);
//   var y = Math.floor(Math.random() * 256);
//   var z = Math.floor(Math.random() * 256);
//   return 'rgb(' + x + ',' + y + ',' + z + ')';
// }

// export function randomIntFromInterval(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const users = [
  { name: 'John', email: 'jhon@dot.com' },
  { name: 'Rohan', email: 'rohan@net.com' },
  { name: 'Vlash', email: 'vlash@email.com' }
];

export const usersData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ users, status: 'ok' });
    }, 1000);
  });
};

export type UserType = { name: string | undefined; email: string | undefined };
