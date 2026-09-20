const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  { text: "Two roads diverged in a wood, and I took the one less traveled by.", author: "Robert Frost" },
  { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
  { text: "Try not to become a man of success, but rather try to become a man of value.", author: "Albert Einstein" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
  { text: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
  { text: "It is never too late to be what you might have been.", author: "George Eliot" },
  { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
  { text: "Do not judge me by my success, judge me by how many times I fell down and got back up again.", author: "Nelson Mandela" },
  { text: "Whoever is happy will make others happy too.", author: "Anne Frank" },
  { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
  { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
  { text: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Keep your face always toward the sunshine, and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Everything has beauty, but not everyone can see.", author: "Confucius" },
  { text: "Nothing is impossible, the word itself says 'I'm possible'!", author: "Audrey Hepburn" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
  { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "Winning isn't everything, but wanting to win is.", author: "Vince Lombardi" },
  { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { text: "You take your life in your own hands, and what happens? A terrible thing: no one to blame.", author: "Erica Jong" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
  { text: "Life shrinks or expands in proportion to one's courage.", author: "Anais Nin" },
  { text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
  { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
  { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { text: "When one door of happiness closes, another opens.", author: "Helen Keller" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Courage is grace under pressure.", author: "Ernest Hemingway" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa" },
  { text: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "You must expect great things of yourself before you can do them.", author: "Michael Jordan" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "What you do makes a difference, and you have to decide what kind of difference you want to make.", author: "Jane Goodall" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", author: "Helen Keller" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "You learn more from failure than from success.", author: "Unknown" },
  { text: "If you are working on something exciting that you really care about, you don't have to be pushed.", author: "Steve Jobs" },
  { text: "Experience is a hard teacher because she gives the test first, the lesson afterward.", author: "Vernon Law" },
  { text: "To know how much there is to know is the beginning of learning to live.", author: "Dorothy West" },
  { text: "Knowing is not enough; we must apply. Wishing is not enough; we must do.", author: "Johann Wolfgang von Goethe" },
  { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { text: "Too many of us are not living our dreams because we are living our fears.", author: "Les Brown" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { text: "The person who says it cannot be done should not interrupt the person doing it.", author: "Chinese Proverb" },
  { text: "There are two ways of spreading light: to be the candle or the mirror that reflects it.", author: "Edith Wharton" },
  { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
  { text: "If the wind will not serve, take to the oars.", author: "Latin Proverb" },
  { text: "You may only succeed if you desire succeeding; you may only fail if you do not mind failing.", author: "Philostratus" },
  { text: "Security is mostly a superstition. Life is either a daring adventure or nothing.", author: "Helen Keller" },
  { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { text: "I didn't fail the test. I just found 100 ways to do it wrong.", author: "Benjamin Franklin" },
  { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
  { text: "In order to write about life first you must live it.", author: "Ernest Hemingway" },
  { text: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.", author: "Henry Ford" },
  { text: "Fashion fades, style is eternal.", author: "Yves Saint Laurent" },
  { text: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss" },
  { text: "We know what we are, but know not what we may be.", author: "William Shakespeare" },
  { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" }
];

const quoteTextEl = document.getElementById('quoteText');
const quoteAuthorEl = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const themeToggleBtn = document.getElementById('themeToggle');
const themeIconEl = document.getElementById('themeIcon');

let lastIndex = -1;

function showRandomQuote() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex && quotes.length > 1);

  lastIndex = index;
  const quote = quotes[index];
  quoteTextEl.textContent = quote.text;
  quoteAuthorEl.textContent = quote.author;
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeIconEl.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('quoteGeneratorTheme', next);
}

const savedTheme = localStorage.getItem('quoteGeneratorTheme') || 'light';
applyTheme(savedTheme);

newQuoteBtn.addEventListener('click', showRandomQuote);
themeToggleBtn.addEventListener('click', toggleTheme);

showRandomQuote();
