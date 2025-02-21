/**
 * await chỉ sử dụng được trong một async function
 * chỉ sử dụng await với promise
 */

const p = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('hello')
      }, 1000)
})

const handle = async () => {
  try {
    const value = await p()
    console.log(value);
  } catch (err) {
    console.warn(err);
  } finally {
    console.log('finish');
  }
  console.log('chay cuo cung');
}

console.log('chay dau tien');

handle()