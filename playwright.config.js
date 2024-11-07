module.exports = {
  testDir: './tests', 
  use: {
    headless: false, 
    baseURL: 'https://www.saucedemo.com/', 
  },
  reporter: [['html', { open: 'always' }]], 
};
