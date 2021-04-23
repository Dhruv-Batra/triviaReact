import fetch from 'node-fetch';

(async () => {
    const ques = await fetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple').then(response => response.json());
    
    console.log(ques);
  })();
