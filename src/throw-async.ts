async function thrower() {
  throw new Error('test');
}

async function level1() {
  return await thrower();
}

async function level2() {
  return await level1();
}

async function level3() {
  return await level2();
}

async function main() {
  try {
    await level3();
  } catch (err) {
    console.warn('main error', err);
  }
}

export default main;
