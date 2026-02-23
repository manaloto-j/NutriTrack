/* ============================================
   NutriTrack — Recipe Detail Scripts
   beefsoup.js
   ============================================ */

// ════════════════════════════════════════════
//  RECIPE DATA
// ════════════════════════════════════════════
const RECIPES = {
  'beef-soup': {
    title: 'Beef Meatball Soup',
    tag: 'Hearty Soup',
    image: 'images/beef-soup.png',
    meta: [
      { icon: 'clock', label: '45 min total' },
      { icon: 'bolt',  label: '320 kcal' },
      { icon: 'arm',   label: '28g Protein' },
      { icon: 'users', label: '4 Servings' },
      { icon: 'star',  label: '4.8 / 5', green: true },
    ],
    description: 'This hearty beef meatball soup is the ultimate comfort food with a nutritional edge. Tender hand-rolled meatballs simmer in a rich, aromatic tomato broth packed with seasonal vegetables. Every bowl delivers 28 grams of protein and a generous helping of fibre-rich vegetables — satisfying, warming, and genuinely good for you.',
    nutrition: { calories: 320, protein: 28, fat: 12, carbs: 22, fiber: 4 },
    ingredients: [
      ['Ground beef (85% lean)', '500g'], ['Onion, diced', '1 large'],
      ['Garlic cloves', '4 cloves'], ['Crushed tomatoes', '400g can'],
      ['Beef broth', '1L'], ['Carrot, diced', '2 medium'],
      ['Bell peppers (red)', '2 peppers'], ['Zucchini', '1 medium'],
      ['Egg', '1'], ['Parmesan, grated', '30g'],
      ['Fresh parsley', 'handful'], ['Olive oil', '2 tbsp'],
      ['Breadcrumbs', '¼ cup'], ['Bay leaves', '2'],
      ['Salt & black pepper', 'to taste'], ['Dried oregano', '1 tsp'],
    ],
    steps: [
      { title: 'Prepare the Meatball Mixture', text: 'In a large bowl, combine ground beef, breadcrumbs, grated Parmesan, beaten egg, minced garlic, chopped parsley, salt, pepper, and oregano. Mix gently until just combined — do not overmix or the meatballs will become tough.' },
      { title: 'Roll the Meatballs', text: 'Using wet hands, roll the mixture into evenly-sized balls, approximately 3cm in diameter. You should get about 20–24 meatballs. Refrigerate for 10 minutes to help them hold their shape.', timer: 10 },
      { title: 'Sauté the Aromatics', text: 'Heat olive oil in a large, heavy-bottomed pot over medium heat. Add diced onion and cook for 4–5 minutes until softened. Add garlic and cook another minute. Add diced carrots and peppers, cook for 3 minutes.', timer: 8 },
      { title: 'Build the Broth', text: 'Pour in the crushed tomatoes and beef broth. Add bay leaves and bring to a gentle boil, then reduce to a simmer. Season with salt, pepper, and oregano. Taste and adjust.' },
      { title: 'Add Meatballs & Simmer', text: 'Carefully lower the meatballs into the simmering broth one by one. Do not stir for the first 5 minutes — let them set. Then gently stir and continue simmering for 20–25 minutes until fully cooked through.', timer: 25 },
      { title: 'Finish & Serve', text: 'Add diced zucchini in the last 5 minutes. Remove bay leaves. Ladle into warm bowls, garnish with fresh parsley and black pepper. Serve with crusty bread or enjoy as-is for a lighter meal.' },
    ],
    tips: ['💡 Wet hands prevent the beef mixture from sticking while rolling meatballs.', '🔥 For extra flavour, briefly brown the meatballs in oil before adding to the broth.', '❄️ Stores well in the fridge for up to 4 days. Flavour improves the next day.'],
  },

  'chicken-salad': {
    title: 'Grilled Chicken Salad',
    tag: 'High Protein',
    image: 'images/chicken-salad.png',
    meta: [
      { icon: 'clock', label: '20 min total' },
      { icon: 'bolt',  label: '285 kcal' },
      { icon: 'arm',   label: '38g Protein' },
      { icon: 'users', label: '2 Servings' },
      { icon: 'star',  label: '4.7 / 5', green: true },
    ],
    description: 'A vibrant, satisfying salad with perfectly grilled chicken breast sliced over a bed of mixed greens, juicy cherry tomatoes, cucumber, and red onion. Finished with a bright lemon-herb vinaigrette, this is a go-to weekday meal that packs an impressive 38 grams of protein per serving.',
    nutrition: { calories: 285, protein: 38, fat: 9, carbs: 12, fiber: 3 },
    ingredients: [
      ['Chicken breast', '300g'], ['Mixed salad greens', '120g'],
      ['Cherry tomatoes', '150g'], ['Cucumber', '1 medium'],
      ['Red onion', '½ small'], ['Olive oil', '3 tbsp'],
      ['Lemon juice', '2 tbsp'], ['Garlic, minced', '1 clove'],
      ['Fresh parsley', 'small bunch'], ['Dried oregano', '½ tsp'],
      ['Salt & black pepper', 'to taste'], ['Sesame seeds', '1 tbsp'],
    ],
    steps: [
      { title: 'Marinate the Chicken', text: 'Mix olive oil, lemon juice, garlic, oregano, salt, and pepper. Coat the chicken breasts in the marinade and let rest for at least 15 minutes (or overnight in the fridge for deeper flavour).', timer: 15 },
      { title: 'Grill the Chicken', text: 'Heat a griddle or pan over high heat. Grill the chicken for 5–6 minutes each side until cooked through with nice char marks. Internal temperature should reach 75°C (165°F).', timer: 12 },
      { title: 'Rest & Slice', text: 'Remove chicken from heat and rest for 5 minutes — this keeps it juicy. Slice on a diagonal into strips.', timer: 5 },
      { title: 'Prepare the Salad Base', text: 'Halve the cherry tomatoes, slice the cucumber, and thinly slice the red onion. Arrange salad greens in a large bowl or plate and add the vegetables.' },
      { title: 'Dress & Assemble', text: 'Whisk remaining olive oil with lemon juice, a pinch of salt and pepper. Drizzle over the salad. Lay the sliced chicken on top, scatter sesame seeds, and finish with fresh parsley.' },
    ],
    tips: ['💡 Pound the chicken to an even thickness before grilling for consistent cooking.', '🍋 Add a little lemon zest to the dressing for an extra citrus punch.', '🥗 Store undressed — keep the dressing separate until ready to eat.'],
  },

  'salmon-pasta': {
    title: 'Grilled Salmon with Asian Noodles',
    tag: 'Omega-3 Rich',
    image: 'images/salmon-pasta.png',
    meta: [
      { icon: 'clock', label: '25 min total' },
      { icon: 'bolt',  label: '420 kcal' },
      { icon: 'arm',   label: '35g Protein' },
      { icon: 'users', label: '2 Servings' },
      { icon: 'star',  label: '4.9 / 5', green: true },
    ],
    description: 'Beautifully seared salmon fillet sits atop a tangle of stir-fried noodles with crisp vegetables and a savoury Asian-inspired sauce. A powerhouse dish rich in omega-3 fatty acids and complete protein, finished with fresh chives and a sesame drizzle. Ready in under 30 minutes.',
    nutrition: { calories: 420, protein: 35, fat: 16, carbs: 34, fiber: 3 },
    ingredients: [
      ['Salmon fillets', '2 × 180g'], ['Egg noodles or soba', '160g'],
      ['Soy sauce', '3 tbsp'], ['Sesame oil', '1 tbsp'],
      ['Fresh ginger, grated', '1 tsp'], ['Garlic cloves', '2'],
      ['Carrot, julienned', '1 medium'], ['Bell pepper, strips', '1'],
      ['Spring onions / chives', 'handful'], ['Olive oil', '2 tbsp'],
      ['Honey', '1 tsp'], ['Salt & white pepper', 'to taste'],
    ],
    steps: [
      { title: 'Cook the Noodles', text: 'Cook noodles according to package instructions until al dente. Drain and toss lightly with sesame oil to prevent sticking. Set aside.' },
      { title: 'Make the Sauce', text: 'Whisk together soy sauce, sesame oil, grated ginger, minced garlic, and honey. Taste and adjust seasoning — it should be savoury with a hint of sweetness.' },
      { title: 'Season the Salmon', text: 'Pat salmon fillets dry with paper towel. Season with salt, white pepper, and a drizzle of olive oil on both sides.' },
      { title: 'Sear the Salmon', text: 'Heat a non-stick pan over high heat. Place salmon skin-side up and cook for 3–4 minutes until a golden crust forms. Flip and cook another 3 minutes. The centre should still be slightly translucent for best texture.', timer: 7 },
      { title: 'Stir-Fry the Vegetables', text: 'In the same pan, add a touch more oil. Stir-fry carrot and bell pepper for 2–3 minutes until just tender. Add the cooked noodles and pour over the sauce. Toss vigorously over high heat for 1–2 minutes.', timer: 5 },
      { title: 'Plate & Serve', text: 'Divide the noodles between plates. Place a salmon fillet on each portion. Scatter fresh chives or spring onions over everything and serve immediately.' },
    ],
    tips: ['💡 Dry salmon fillets with paper towel before searing for a much crispier crust.', '🔥 Cook the noodles slightly underdone — they finish in the pan with the sauce.', '🌿 A squeeze of lime over the finished dish brightens all the flavours.'],
  },

  'chicken-parmesan': {
    title: 'Classic Chicken Parmesan',
    tag: "Editor's Pick",
    image: 'images/chicken-parmesan.png',
    meta: [
      { icon: 'clock', label: '35 min total' },
      { icon: 'bolt',  label: '480 kcal' },
      { icon: 'arm',   label: '52g Protein' },
      { icon: 'users', label: '4 Servings' },
      { icon: 'star',  label: '4.9 / 5', green: true },
    ],
    description: 'The ultimate high-protein comfort food. Crispy panko-breaded chicken breast is baked until golden, then smothered in rich marinara and a blanket of molten mozzarella and Parmesan. Each serving delivers an incredible 52 grams of protein without sacrificing any of the indulgence.',
    nutrition: { calories: 480, protein: 52, fat: 18, carbs: 24, fiber: 2 },
    ingredients: [
      ['Chicken breasts (large)', '4 × 200g'], ['Panko breadcrumbs', '100g'],
      ['Parmesan, finely grated', '60g'], ['Mozzarella, sliced', '150g'],
      ['Marinara / tomato sauce', '300ml'], ['Egg', '2'],
      ['Flour (for dredging)', '50g'], ['Garlic powder', '1 tsp'],
      ['Italian seasoning', '2 tsp'], ['Olive oil spray', 'for baking'],
      ['Fresh basil', 'to garnish'], ['Salt & black pepper', 'to taste'],
    ],
    steps: [
      { title: 'Pound & Season the Chicken', text: 'Place chicken breasts between two sheets of cling film. Pound to an even 1.5cm thickness with a mallet or rolling pin. Season both sides with salt, pepper, garlic powder, and Italian seasoning.' },
      { title: 'Set Up the Breading Station', text: 'Prepare three shallow dishes: one with seasoned flour, one with beaten eggs, and one with panko breadcrumbs mixed with half the Parmesan.' },
      { title: 'Bread the Chicken', text: 'Dredge each breast in flour (shake off excess), dip in egg (let drip), then press firmly into the panko mixture coating all sides evenly.' },
      { title: 'Bake Until Crispy', text: 'Arrange breaded chicken on a lined baking tray. Spray lightly with olive oil. Bake at 210°C (410°F) for 18–20 minutes until golden and cooked through.', timer: 20 },
      { title: 'Add Sauce & Cheese', text: 'Spoon marinara sauce over each breast. Layer with mozzarella slices and sprinkle remaining Parmesan. Return to oven and bake a further 5–7 minutes until cheese is bubbling and lightly browned.', timer: 7 },
      { title: 'Rest & Garnish', text: 'Rest for 3 minutes before serving. Tear fresh basil leaves over the top. Serve with pasta, steamed greens, or a simple salad.' },
    ],
    tips: ['💡 Pounding the chicken to even thickness is the #1 key to crispy, juicy results.', '🔥 Panko (Japanese breadcrumbs) gives a much crispier crust than regular breadcrumbs.', '🧀 Drain mozzarella on paper towels before using to prevent a watery sauce.'],
  },

  'zucchini-bolognese': {
    title: 'Zucchini Noodle Bolognese',
    tag: 'Low Carb',
    image: null,
    meta: [
      { icon: 'clock', label: '30 min total' },
      { icon: 'bolt',  label: '310 kcal' },
      { icon: 'arm',   label: '30g Protein' },
      { icon: 'users', label: '3 Servings' },
      { icon: 'star',  label: '4.5 / 5', green: true },
    ],
    description: 'All the comfort of a classic Italian Bolognese, without the carb load. A rich, slow-simmered beef and tomato ragù is served over spiralized zucchini noodles (zoodles) that provide a satisfying texture while keeping carbs minimal. The sauce is the star — deeply flavoured with red wine, herbs, and aromatics.',
    nutrition: { calories: 310, protein: 30, fat: 14, carbs: 14, fiber: 5 },
    ingredients: [
      ['Ground beef (lean)', '400g'], ['Zucchini (large)', '4'],
      ['Onion, finely diced', '1'], ['Carrot, finely diced', '1'],
      ['Celery stalk', '1'], ['Garlic cloves', '3'],
      ['Crushed tomatoes', '400g can'], ['Tomato paste', '2 tbsp'],
      ['Dry red wine', '100ml'], ['Beef stock', '100ml'],
      ['Olive oil', '2 tbsp'], ['Dried thyme & oregano', '1 tsp each'],
      ['Salt & black pepper', 'to taste'], ['Parmesan, to serve', '30g'],
    ],
    steps: [
      { title: 'Build the Soffritto', text: 'Heat olive oil in a heavy pan. Add finely diced onion, carrot, and celery. Cook over medium-low heat for 8 minutes until very soft and sweet. Add garlic and cook 1 more minute.', timer: 9 },
      { title: 'Brown the Beef', text: 'Increase heat to high. Add ground beef and cook, breaking it up, until deeply browned — about 5–6 minutes. Season with salt, pepper, thyme, and oregano.' },
      { title: 'Deglaze with Wine', text: 'Pour in red wine and stir to scrape up any browned bits. Let it bubble and reduce by half — about 2 minutes. This adds incredible depth.' },
      { title: 'Simmer the Sauce', text: 'Stir in tomato paste and cook 1 minute. Add crushed tomatoes and beef stock. Bring to a boil, then reduce to a gentle simmer for 15 minutes until thick and fragrant.', timer: 15 },
      { title: 'Prepare Zoodles', text: 'While the sauce simmers, spiralize the zucchini. Heat a non-stick pan over high heat with a touch of oil. Sauté zoodles for just 2 minutes — they should be tender but still have a slight bite. Season lightly.' },
      { title: 'Assemble & Serve', text: 'Divide the zoodles into warm bowls. Ladle the Bolognese generously over the top. Finish with freshly grated Parmesan and a crack of black pepper.' },
    ],
    tips: ['💡 Do not overcook the zoodles — 2 minutes max or they become watery.', '🍷 The red wine is worth including; it transforms the sauce depth completely.', '🧊 The Bolognese sauce freezes beautifully for up to 3 months.'],
  },

  'thai-soup': {
    title: 'Thai Lemongrass Soup',
    tag: 'Warming',
    image: null,
    meta: [
      { icon: 'clock', label: '40 min total' },
      { icon: 'bolt',  label: '265 kcal' },
      { icon: 'arm',   label: '22g Protein' },
      { icon: 'users', label: '4 Servings' },
      { icon: 'star',  label: '4.6 / 5', green: true },
    ],
    description: 'A deeply aromatic Thai-inspired soup with bright lemongrass, fragrant galangal, creamy coconut milk, and tender chicken pieces. Earthy mushrooms and a squeeze of lime bring balance. Light enough to be a weekday staple, complex enough to impress — this is comfort food with Southeast Asian soul.',
    nutrition: { calories: 265, protein: 22, fat: 13, carbs: 16, fiber: 2 },
    ingredients: [
      ['Chicken thigh, sliced', '400g'], ['Coconut milk (light)', '400ml'],
      ['Chicken stock', '600ml'], ['Lemongrass stalks', '2'],
      ['Galangal or ginger', '3cm piece'], ['Kaffir lime leaves', '4'],
      ['Mushrooms (oyster or shiitake)', '150g'], ['Cherry tomatoes', '100g'],
      ['Fish sauce', '3 tbsp'], ['Lime juice', '3 tbsp'],
      ['Red chilli', '1–2 to taste'], ['Fresh coriander', 'to serve'],
      ['Sugar', '1 tsp'], ['Spring onions', '2'],
    ],
    steps: [
      { title: 'Prepare Aromatics', text: 'Bruise the lemongrass stalks with the back of a knife and cut into 5cm pieces. Slice the galangal. Tear the kaffir lime leaves. Halve the chilli. These release their oils when bruised — don\'t skip this step.' },
      { title: 'Build the Broth', text: 'Combine chicken stock, lemongrass, galangal, kaffir lime leaves, and chilli in a pot. Bring to a boil over medium-high heat, then reduce and simmer for 10 minutes to infuse the aromatics.', timer: 10 },
      { title: 'Add Coconut Milk', text: 'Pour in the coconut milk and stir gently. Return to a simmer. Do not let it boil vigorously once coconut milk is added — this can cause it to split.' },
      { title: 'Cook the Chicken', text: 'Add the sliced chicken to the simmering broth. Cook for 8–10 minutes until the chicken is cooked through and tender.', timer: 10 },
      { title: 'Add Vegetables & Season', text: 'Add mushrooms and cherry tomatoes. Cook 3 more minutes. Season with fish sauce, lime juice, and sugar. Taste and adjust — it should be a balance of salty, sour, and slightly spicy.' },
      { title: 'Serve', text: 'Ladle into bowls. Garnish generously with fresh coriander, sliced spring onions, and an extra wedge of lime on the side. Remove lemongrass pieces before eating.' },
    ],
    tips: ['💡 Don\'t eat the lemongrass — it\'s for flavour only; remove pieces before serving.', '🌶️ Adjust chilli to your heat preference; deseed for milder soup.', '🥥 Use light coconut milk to keep calories lower without sacrificing flavour.'],
  },
};

// ════════════════════════════════════════════
//  SVG ICON HELPERS
// ════════════════════════════════════════════
function metaSVG(icon) {
  const icons = {
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    bolt:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    arm:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.7 2.8-1.8 3.6L16 20H8l1.8-10.4A4 4 0 0 1 8 6a4 4 0 0 1 4-4z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',
    star:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  };
  return icons[icon] || '';
}

function stepIconSVG(i) {
  const icons = [
    '<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
    '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    '<path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536"/>',
    '<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>',
    '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    '<path d="M4 12l5 5L20 7"/>',
  ];
  return icons[i % icons.length];
}

// ════════════════════════════════════════════
//  RENDER RECIPE
// ════════════════════════════════════════════
let activeStep = 0;
let stepEls = [];
let servings = 4;
let currentNutrition = {};

function renderRecipe(key) {
  const data = RECIPES[key];
  if (!data) return;

  // update page title
  document.title = data.title + ' — NutriTrack';

  // hero image
  const heroImg = document.getElementById('recipe-hero-img');
  if (data.image) {
    heroImg.src = data.image;
    heroImg.alt = data.title;
    heroImg.style.display = '';
  } else {
    heroImg.src = '';
    heroImg.style.display = 'none';
    document.querySelector('.recipe-hero').style.background = 'linear-gradient(135deg, #0d2b1f, #0a1a14)';
  }

  // tag, title
  document.getElementById('recipe-tag').textContent = data.tag;
  document.getElementById('recipe-title').textContent = data.title;

  // meta pills
  document.getElementById('recipe-meta').innerHTML = data.meta.map(m =>
    `<span class="meta-pill" ${m.green ? 'style="color:var(--green)"' : ''}>
      ${metaSVG(m.icon)} ${m.label}
    </span>`
  ).join('');

  // description
  document.getElementById('recipe-description').textContent = data.description;

  // ingredients
  document.getElementById('recipe-ingredients').innerHTML = data.ingredients.map(([name, amount]) =>
    `<div class="ing-item">
      <span class="ing-dot"></span>
      ${name}
      <span class="ing-amount">${amount}</span>
    </div>`
  ).join('');

  // steps
  document.getElementById('recipe-stepper').innerHTML = data.steps.map((s, i) =>
    `<div class="step" data-index="${i}">
      <div class="step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${stepIconSVG(i)}</svg>
      </div>
      <div class="step-content">
        <div class="step-number">Step ${String(i + 1).padStart(2, '0')}</div>
        <h4>${s.title}</h4>
        <p>${s.text}</p>
        ${s.timer ? `<span class="step-timer" data-minutes="${s.timer}" data-seconds="${s.timer * 60}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span class="timer-display">${s.timer}:00</span> — click to start timer
        </span>` : ''}
      </div>
    </div>`
  ).join('');

  // tips
  document.getElementById('recipe-tips').innerHTML = data.tips.map(t =>
    `<div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="font-size:1.1rem;flex-shrink:0;">${t.slice(0,2)}</span>
      <p style="font-size:0.82rem;color:var(--gray-2);line-height:1.6;">${t.slice(2).trim()}</p>
    </div>`
  ).join('');

  // nutrition
  currentNutrition = { ...data.nutrition };
  servings = 4;
  document.querySelector('.serv-count').textContent = servings;
  updateNutritionDisplay();

  // re-bind stepper
  stepEls = Array.from(document.querySelectorAll('.step'));
  activeStep = 0;
  setActiveStep(0);

  // re-bind timers
  initTimers();

  // reset next-step btn
  const nextBtn = document.getElementById('next-step');
  nextBtn.textContent = '';
  nextBtn.innerHTML = 'Next Step <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  nextBtn.style.background = '';
  nextBtn.disabled = false;
}

// ════════════════════════════════════════════
//  STEPPER
// ════════════════════════════════════════════
function setActiveStep(index) {
  stepEls.forEach((step, i) => {
    step.classList.remove('active', 'done');
    if (i < index) step.classList.add('done');
    if (i === index) step.classList.add('active');
  });
  activeStep = index;
  // scroll step into view on mobile
  stepEls[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.addEventListener('click', e => {
  const step = e.target.closest('.step');
  if (step && step.dataset.index !== undefined) {
    setActiveStep(parseInt(step.dataset.index, 10));
  }
});

document.getElementById('next-step')?.addEventListener('click', () => {
  if (activeStep < stepEls.length - 1) {
    setActiveStep(activeStep + 1);
  } else {
    stepEls.forEach(s => s.classList.add('done'));
    const btn = document.getElementById('next-step');
    btn.innerHTML = '✓ Recipe Complete!';
    btn.style.background = 'var(--green-dim)';
    btn.disabled = true;
  }
});

// ════════════════════════════════════════════
//  TIMERS
// ════════════════════════════════════════════
function initTimers() {
  document.querySelectorAll('.step-timer[data-minutes]').forEach(timer => {
    // reset state
    let seconds = parseInt(timer.dataset.seconds, 10);
    let interval = null;
    let running = false;
    const display = timer.querySelector('.timer-display');
    if (!display) return;

    function fmt(s) {
      return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
    }

    display.textContent = fmt(seconds);

    // clone to remove old listeners
    const fresh = timer.cloneNode(true);
    timer.replaceWith(fresh);

    fresh.addEventListener('click', () => {
      if (running) {
        clearInterval(interval);
        running = false;
        fresh.classList.remove('counting');
        fresh.querySelector('.timer-display').textContent = fmt(seconds);
      } else {
        running = true;
        fresh.classList.add('counting');
        const disp = fresh.querySelector('.timer-display');
        interval = setInterval(() => {
          seconds--;
          disp.textContent = fmt(seconds);
          if (seconds <= 0) {
            clearInterval(interval);
            running = false;
            disp.textContent = 'Done! ✓';
            fresh.classList.remove('counting');
          }
        }, 1000);
      }
    });
  });
}

// ════════════════════════════════════════════
//  SERVINGS / NUTRITION
// ════════════════════════════════════════════
function updateNutritionDisplay() {
  const ratio = servings / 4;
  Object.keys(currentNutrition).forEach(key => {
    const el = document.querySelector(`[data-nutrient="${key}"]`);
    if (el) {
      const val = Math.round(currentNutrition[key] * ratio);
      el.textContent = key === 'calories' ? `${val} kcal` : `${val}g`;
    }
  });
  document.querySelector('.serv-count').textContent = servings;
}

document.querySelectorAll('.serv-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.action === 'inc' && servings < 12) servings++;
    if (btn.dataset.action === 'dec' && servings > 1) servings--;
    updateNutritionDisplay();
  });
});

// ════════════════════════════════════════════
//  SWITCHER
// ════════════════════════════════════════════
function activateSwitcher(key) {
  document.querySelectorAll('.switcher-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.recipe === key);
  });
}

document.querySelectorAll('.switcher-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.recipe;
    // update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('recipe', key);
    window.history.pushState({}, '', url);
    activateSwitcher(key);
    renderRecipe(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ════════════════════════════════════════════
//  INIT — read ?recipe= param
// ════════════════════════════════════════════
const params = new URLSearchParams(window.location.search);
const initKey = params.get('recipe') || 'beef-soup';
activateSwitcher(initKey);
renderRecipe(initKey);

