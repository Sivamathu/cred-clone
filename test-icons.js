import * as lucide from 'lucide-react';
console.log('Available keys matching social:', Object.keys(lucide).filter(x => 
  ['git', 'twit', 'link', 'insta'].some(k => x.toLowerCase().includes(k))
));
