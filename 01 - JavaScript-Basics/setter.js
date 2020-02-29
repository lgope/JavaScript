const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'BN';
language.current = 'EN';
language.current = 'FA';
language.current = 'ES';

console.log(language.log);
// expected output: Array ["EN", "FA"]
