/* 
My name is State Trooper Mark (“skidmark”) McDingle. My job is maintaining 117 
miles of the Interstate, keeping it clean and clear of dead varmints. It is a 
serious job and I take my job seriously. I am the Road-Kill Detective!

Every time I find some dead critter I scrape it up and record what type it was 
in my dead-critter notebook. Mostly I just cruise up and down the interstate and 
only find a few racoons or the occasional squirrel… But recently the road-kill 
has become much more exotic. There must be some illegal private zoo back in the 
woods with major security problem.

But that’s none of my business… Anything beyond the fog-line is out of my jurisdiction.

Evidence
Here are some photos of what I came across last week:
There was a thing that looked like a hyena
==========h===yyyyyy===eeee=n==a========
a long black and white smudge that probably once was a penguin
======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n=
and an unlucky bear that was hit going the other direction
=====r=rrr=rra=====eee======bb====b=======

Kata Task
Even for a professional like me, the identification of flattened exotic animals 
is not always easy! If it ever happens that I can’t find all of the remains, or 
if there are gaps or other parts that I don’t recognise, then I record it as ?? 
in my dead-critter notebook. What I really need is a program that I can scan my 
photos into which can give back the correct answer straight away.

----
Helper array ANIMALS is provided.
*/

function roadKill(photo) {
  let parts = [...new Set(photo.replace(/=/g, ''))];
  let result = ANIMALS.filter(animal => {
    return parts.every(part => animal.includes(part)) &&
      animal.split('').every(part => parts.includes(part));
  })[0] || '??';
  console.log(`console.log(roadKill('${photo}') === '${result}');`);
  return result;
}

var ANIMALS = ['aardvark',
  'alligator',
  'armadillo',
  'antelope',
  'baboon',
  'bear',
  'bobcat',
  'butterfly',
  'cat',
  'camel',
  'cow',
  'chameleon',
  'dog',
  'dolphin',
  'duck',
  'dragonfly',
  'eagle',
  'elephant',
  'emu',
  'echidna',
  'fish',
  'frog',
  'flamingo',
  'fox',
  'goat',
  'giraffe',
  'gibbon',
  'gecko',
  'hyena',
  'hippopotamus',
  'horse',
  'hamster',
  'insect',
  'impala',
  'iguana',
  'ibis',
  'jackal',
  'jaguar',
  'jellyfish',
  'kangaroo',
  'kiwi',
  'koala',
  'killerwhale',
  'lemur',
  'leopard',
  'llama',
  'lion',
  'monkey',
  'mouse',
  'moose',
  'meercat',
  'numbat',
  'newt',
  'ostrich',
  'otter',
  'octopus',
  'orangutan',
  'penguin',
  'panther',
  'parrot',
  'pig',
  'quail',
  'quokka',
  'quoll',
  'rat',
  'rhinoceros',
  'racoon',
  'reindeer',
  'rabbit',
  'snake',
  'squirrel',
  'sheep',
  'seal',
  'turtle',
  'tiger',
  'turkey',
  'tapir',
  'unicorn',
  'vampirebat',
  'vulture',
  'wombat',
  'walrus',
  'wildebeast',
  'wallaby',
  'yak',
  'zebra']


// tests
console.log(roadKill('==========h===yyyyyy===eeee=n==a========') === 'hyena');
console.log(roadKill('=====r=rrr=rra=====eee======bb====b=======') === 'bear');
console.log(roadKill('======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n=') === 'penguin');
console.log(roadKill('==www====i==ld===ebbbbbb=====e====as====t====') === 'wildebeast');
console.log(roadKill('=======ka================yyy==y==y=') === 'yak');
console.log(roadKill('=======p======iiiiiiiiiiiiiig===============') === 'pig');
console.log(roadKill('=====ccc=========a==========tttt==t=t=') === 'cat');
console.log(roadKill('====zzzzzzzzzzzzzzzzzz==br===') === '??');
console.log(roadKill('===l======aaaaaaaaaam=a=======y===') === '??');