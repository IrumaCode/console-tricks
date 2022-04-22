const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("hello");
    // Interpolated
    console.log("hello I am a %s string!", "+poop");
    // Styled
    console.log('%c i am some great text', 'font-size: 50px; color: red; text-shadow: 10px 10px 10px blue');
    // warning!
    console.warn('OHHH NOOO');
    // Error :|
    console.error('Shit!');

    // Info
    console.info('Crocodile eat 3-4 people per year');
    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'You did not select the right element!');
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`this is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} years old`);
      console.groupEnd(`${dog.name}`);
    });
    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });