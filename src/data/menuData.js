// All category/product photos are looked up from the /public/menu folder.
// To use your own photos, just drop a file with the matching name into
// public/menu/... — no code changes needed. Until then, a styled
// placeholder is shown automatically.

export const categories = [
  {
    slug: 'beef-burgers',
    name: 'Beef Burgers',
    image: '/menu/categories/beef-burgers.jpg',
    products: [
      { slug: 'the-addict-classic', name: 'The Addict Classic', price: 9.5, description: 'Smashed beef patty, cheddar, pickles, house sauce, brioche bun.', image: '/menu/beef-burgers/the-addict-classic.jpg' },
      { slug: 'double-trouble', name: 'Double Trouble', price: 12, description: 'Two smashed patties, double cheese, caramelized onions, smoked mayo.', image: '/menu/beef-burgers/double-trouble.jpg' },
      { slug: 'inferno-stack', name: 'Inferno Stack', price: 11.5, description: 'Beef patty, jalapeños, pepper jack, chipotle sauce.', image: '/menu/beef-burgers/inferno-stack.jpg', spicy: true },
      { slug: 'bacon-addiction', name: 'Bacon Addiction', price: 12.5, description: 'Beef patty, crispy bacon, cheddar, BBQ glaze.', image: '/menu/beef-burgers/bacon-addiction.jpg' },
    ],
  },
  {
    slug: 'chicken-burgers',
    name: 'Chicken Burgers',
    image: '/menu/categories/chicken-burgers.jpg',
    products: [
      { slug: 'crispy-original', name: 'Crispy Original', price: 8.5, description: 'Crispy fried chicken thigh, slaw, pickles, house mayo.', image: '/menu/chicken-burgers/crispy-original.jpg' },
      { slug: 'nashville-heat', name: 'Nashville Heat', price: 9.5, description: 'Nashville-spiced chicken, pickles, ranch drizzle.', image: '/menu/chicken-burgers/nashville-heat.jpg', spicy: true },
      { slug: 'honey-butter', name: 'Honey Butter Crunch', price: 9.5, description: 'Crispy chicken, honey butter glaze, pickled slaw.', image: '/menu/chicken-burgers/honey-butter.jpg' },
      { slug: 'smoky-bbq-chicken', name: 'Smoky BBQ Chicken', price: 9, description: 'Grilled chicken breast, smoked BBQ sauce, onion crisps.', image: '/menu/chicken-burgers/smoky-bbq-chicken.jpg' },
    ],
  },
  {
    slug: 'wings',
    name: 'Wings',
    image: '/menu/categories/wings.jpg',
    products: [
      { slug: 'buffalo-wings', name: 'Buffalo Wings', price: 7, description: '6 pcs tossed in classic buffalo sauce, served with ranch.', image: '/menu/wings/buffalo-wings.jpg', spicy: true },
      { slug: 'honey-mustard-wings', name: 'Honey Mustard Wings', price: 7, description: '6 pcs glazed in sweet honey mustard.', image: '/menu/wings/honey-mustard-wings.jpg' },
      { slug: 'bbq-wings', name: 'BBQ Wings', price: 7, description: '6 pcs smothered in smoky BBQ glaze.', image: '/menu/wings/bbq-wings.jpg' },
      { slug: 'lemon-pepper-wings', name: 'Lemon Pepper Wings', price: 7.5, description: '6 pcs dry-rubbed with zesty lemon pepper.', image: '/menu/wings/lemon-pepper-wings.jpg' },
    ],
  },
  {
    slug: 'fries',
    name: 'Fries',
    image: '/menu/categories/fries.jpg',
    products: [
      { slug: 'classic-fries', name: 'Classic Fries', price: 4, description: 'Golden crispy fries, lightly salted.', image: '/menu/fries/classic-fries.jpg' },
      { slug: 'cheese-fries', name: 'Cheese Fries', price: 5.5, description: 'Classic fries loaded with melted cheddar sauce.', image: '/menu/fries/cheese-fries.jpg' },
      { slug: 'cajun-fries', name: 'Cajun Fries', price: 5, description: 'Tossed in a smoky cajun spice blend.', image: '/menu/fries/cajun-fries.jpg', spicy: true },
      { slug: 'truffle-fries', name: 'Truffle Fries', price: 6.5, description: 'Truffle oil, parmesan, fresh parsley.', image: '/menu/fries/truffle-fries.jpg' },
    ],
  },
  {
    slug: 'loaded-fries',
    name: 'Loaded Fries',
    image: '/menu/categories/loaded-fries.jpg',
    products: [
      { slug: 'beef-loaded-fries', name: 'Beef Loaded Fries', price: 9, description: 'Fries topped with seasoned beef, cheese sauce, jalapeños.', image: '/menu/loaded-fries/beef-loaded-fries.jpg' },
      { slug: 'chicken-loaded-fries', name: 'Chicken Loaded Fries', price: 8.5, description: 'Fries topped with crispy chicken bites, ranch, cheddar.', image: '/menu/loaded-fries/chicken-loaded-fries.jpg' },
      { slug: 'bacon-cheese-fries', name: 'Bacon Cheese Fries', price: 8, description: 'Fries loaded with crispy bacon and melted cheese.', image: '/menu/loaded-fries/bacon-cheese-fries.jpg' },
      { slug: 'pulled-bbq-fries', name: 'Pulled BBQ Fries', price: 9.5, description: 'Fries topped with smoky pulled BBQ chicken.', image: '/menu/loaded-fries/pulled-bbq-fries.jpg' },
    ],
  },
  {
    slug: 'appetizers',
    name: 'Appetizers',
    image: '/menu/categories/appetizers.jpg',
    products: [
      { slug: 'mozzarella-sticks', name: 'Mozzarella Sticks', price: 6, description: '5 pcs breaded mozzarella, marinara dip.', image: '/menu/appetizers/mozzarella-sticks.jpg' },
      { slug: 'jalapeno-poppers', name: 'Jalapeño Poppers', price: 6.5, description: '5 pcs cream-cheese-filled jalapeños, breaded and fried.', image: '/menu/appetizers/jalapeno-poppers.jpg', spicy: true },
      { slug: 'onion-rings', name: 'Onion Rings', price: 5.5, description: 'Crispy battered onion rings, house dip.', image: '/menu/appetizers/onion-rings.jpg' },
      { slug: 'starter-squad', name: 'Starter Squad Platter', price: 12, description: 'A mix of mozzarella sticks, onion rings and poppers.', image: '/menu/appetizers/starter-squad.jpg' },
    ],
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}