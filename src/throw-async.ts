import main from 'morriq-nodejs-typescript-issues';

main()
  .then(() => {
    console.log('finished');
  })
  .catch((err) => {
    console.log(...err);
    console.error('Something went wrong', err);
  });
