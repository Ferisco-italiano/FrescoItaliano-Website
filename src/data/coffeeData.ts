export interface CoffeeDrink {
  id: string;
  name: string;
  italianName: string;
  category: 'espresso' | 'milk' | 'tea' | 'other';
  description: string;
  origin: string;
  roastLevel: string;
  scaScore: number;
  intensity: number;
  notes: string[];
  image: string;
}

export interface MachineHotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
}

export const SIGNATURE_DRINKS: CoffeeDrink[] = [
  {
    id: 'short-espresso',
    name: 'Short Espresso',
    italianName: 'Espresso Corto',
    category: 'espresso',
    description: 'A concentrated, 9-bar extraction of locally roasted beans. It delivers a rich, intense flavor profile topped with a perfect, golden crema.',
    origin: 'Java Blend Single-Origin Blend (Nova Scotia x Milan Roast)',
    roastLevel: 'Medium-Dark Italian',
    scaScore: 86.5,
    intensity: 9,
    notes: ['Dark Chocolate', 'Toasted Almond', 'Golden Caramel'],
    image: '/images/Coffee/Short Espresso.webp'
  },
  {
    id: 'long-espresso',
    name: 'Long Espresso',
    italianName: 'Espresso Lungo',
    category: 'espresso',
    description: 'An extended extraction that allows more water to pass through the coffee grounds. This creates a larger, slightly milder cup while maintaining the authentic Italian espresso base.',
    origin: 'Java Blend Signature SCA 84+',
    roastLevel: 'Medium Italian',
    scaScore: 85.5,
    intensity: 7,
    notes: ['Brown Sugar', 'Toasted Grain', 'Soft Citrus'],
    image: '/images/Coffee/Long Espresso.webp'
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    italianName: 'Caffè Macchiato',
    category: 'espresso',
    description: 'A bold shot of our signature espresso elegantly "marked" with a small dollop of aerated milk. It provides a robust caffeine boost with a subtly smoothed finish.',
    origin: 'Java Blend Espresso Reserve',
    roastLevel: 'Medium-Dark',
    scaScore: 86.0,
    intensity: 8,
    notes: ['Cocoa Nibs', 'Warm Milk', 'Roasted Hazelnut'],
    image: '/images/Coffee/Macchiato.webp'
  },
  {
    id: 'americano',
    name: 'Americano',
    italianName: 'Caffè Americano',
    category: 'espresso',
    description: 'A classic Italian espresso seamlessly pulled over hot water. This preserves the complex aromatics and crema of the espresso in a smooth, full-sized cup.',
    origin: 'Java Blend Single-Origin Blend',
    roastLevel: 'Medium-Dark Italian',
    scaScore: 85.0,
    intensity: 6,
    notes: ['Dark Cocoa', 'Toasted Bread', 'Golden Crema'],
    image: '/images/Coffee/Americano.webp'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    italianName: 'Cappuccino',
    category: 'milk',
    description: 'A perfectly balanced trifold of espresso, steamed milk, and a deep layer of velvety milk foam. The precise aeration process creates a luxurious, cloud-like texture.',
    origin: 'Java Blend Espresso Reserve',
    roastLevel: 'Medium-Dark',
    scaScore: 85.5,
    intensity: 7,
    notes: ['Vanilla Bean', 'Creamy Milk', 'Toasted Hazelnut'],
    image: '/images/Coffee/Cappuccino.webp'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    italianName: 'Caffè Mocha',
    category: 'milk',
    description: 'A decadent integration of 9-bar espresso, rich chocolate, and steamed milk. It perfectly balances the deep, earthy notes of coffee with a satisfying, premium sweetness.',
    origin: 'Java Blend Espresso Reserve',
    roastLevel: 'Medium-Dark',
    scaScore: 85.0,
    intensity: 7,
    notes: ['Rich Cocoa', 'Steamed Milk', 'Golden Caramel'],
    image: '/images/Coffee/Mocha.webp'
  },
  {
    id: 'mochaccino',
    name: 'Mochaccino',
    italianName: 'Mochaccino',
    category: 'milk',
    description: 'A luxurious, frosted blend of our premium coffee and dense chocolate. It delivers a dessert-like, highly satisfying flavor profile designed for a comforting midday break.',
    origin: 'Java Blend Espresso Reserve',
    roastLevel: 'Medium-Dark',
    scaScore: 84.5,
    intensity: 6,
    notes: ['Dense Chocolate', 'Whipped Milk', 'Sweet Cream'],
    image: '/images/Coffee/Mochaccino.webp'
  },
  {
    id: 'cafe-latte',
    name: 'Café Latte',
    italianName: 'Caffè Latte',
    category: 'milk',
    description: 'A smooth, mellow classic crafted with a single shot of espresso and a generous pour of lightly textured steamed milk. It is designed to provide a sustained, comforting energy boost.',
    origin: 'Java Blend Signature SCA 84+',
    roastLevel: 'Medium',
    scaScore: 85.0,
    intensity: 6,
    notes: ['Toffee', 'Warm Spice', 'Steamed Milk'],
    image: '/images/Coffee/CafeLate.webp'
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    italianName: 'Cioccolata Calda',
    category: 'other',
    description: 'A rich, thick, and highly comforting beverage crafted from premium cocoa powders. It offers a decadent, caffeine-free alternative that is perfectly mixed for a velvety mouthfeel.',
    origin: 'Premium Belgian Cocoa Blend',
    roastLevel: 'N/A',
    scaScore: 0,
    intensity: 3,
    notes: ['Velvet Cocoa', 'Steamed Milk', 'Warm Sweetness'],
    image: '/images/Coffee/Hot Chocolate.webp'
  },
  {
    id: 'french-vanilla',
    name: 'French Vanilla',
    italianName: 'Vaniglia Francese',
    category: 'other',
    description: 'A sweet, highly fragrant blend infused with classic vanilla aromatics. It delivers a warm, comforting profile that serves as a perfect, soothing alternative to traditional coffee.',
    origin: 'Java Blend Vanilla Reserve',
    roastLevel: 'Light-Medium',
    scaScore: 82.0,
    intensity: 4,
    notes: ['Vanilla Bean', 'Warm Cream', 'Soft Sweetness'],
    image: '/images/Coffee/French Vanilla.webp'
  },
  {
    id: 'earl-grey-tea',
    name: 'Earl Grey Tea',
    italianName: 'Tè Earl Grey',
    category: 'tea',
    description: 'A robust black tea steeped to perfection and infused with the citrusy notes of bergamot oil. It provides a sophisticated, aromatic, and refined midday refresher.',
    origin: 'Single-Estate Ceylon Black Tea',
    roastLevel: 'N/A',
    scaScore: 0,
    intensity: 4,
    notes: ['Bergamot', 'Black Tea', 'Citrus Zest'],
    image: '/images/Coffee/Earl Grey Tea.webp'
  },
  {
    id: 'english-breakfast-tea',
    name: 'English Breakfast Tea',
    italianName: 'Tè Inglese',
    category: 'tea',
    description: 'A full-bodied, traditional black tea blend designed to yield a rich and hearty cup. It serves as a strong, reliable cornerstone for morning routines.',
    origin: 'Assam & Ceylon Black Tea Blend',
    roastLevel: 'N/A',
    scaScore: 0,
    intensity: 5,
    notes: ['Malty Black Tea', 'Toasted Grain', 'Robust Body'],
    image: '/images/Coffee/EnglishBreakfatTea.webp'
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    italianName: 'Tè Verde',
    category: 'tea',
    description: 'A light, unoxidized tea steeped gently to preserve its natural, earthy aromatics and antioxidants. It offers a clean, soothing, and refreshing alternative to dark roasts.',
    origin: 'Single-Origin Sencha Green Tea',
    roastLevel: 'N/A',
    scaScore: 0,
    intensity: 2,
    notes: ['Grassy Notes', 'Light Sweetness', 'Clean Finish'],
    image: '/images/Coffee/Green Tea.webp'
  },
  {
    id: 'peppermint-tea',
    name: 'Peppermint Tea',
    italianName: 'Tè alla Menta',
    category: 'tea',
    description: 'A vibrant, naturally caffeine-free herbal infusion driven by crisp peppermint leaves. It delivers a cooling, highly soothing sensation for absolute relaxation.',
    origin: 'Whole-Leaf Peppermint Herbal Infusion',
    roastLevel: 'N/A',
    scaScore: 0,
    intensity: 1,
    notes: ['Crisp Mint', 'Cooling Finish', 'Naturally Caffeine-Free'],
    image: '/images/Coffee/PepperminTea.webp'
  },
  {
    id: 'chai-tea-latte',
    name: 'Chai Tea Latte',
    italianName: 'Chai Latte',
    category: 'tea',
    description: 'A deeply spiced black tea combined with creamy, textured milk. It perfectly balances warming aromatics like cinnamon and cardamom with a smooth, velvety finish.',
    origin: 'Spiced Black Tea Blend',
    roastLevel: 'N/A',
    scaScore: 0,
    intensity: 4,
    notes: ['Cinnamon', 'Cardamom', 'Steamed Milk'],
    image: '/images/Coffee/ChaiTeaLatte.webp'
  },
  {
    id: 'protein-coffee',
    name: 'Protein Coffee',
    italianName: 'Caffè Proteico',
    category: 'other',
    description: 'Our classic, locally roasted espresso expertly blended with a high-quality protein base. It serves as the ultimate functional beverage for post-workout recovery or sustained daily energy.',
    origin: 'Java Blend Espresso Reserve + Whey Protein Base',
    roastLevel: 'Medium-Dark',
    scaScore: 85.0,
    intensity: 7,
    notes: ['Roasted Espresso', 'Creamy Protein', 'Subtle Sweetness'],
    image: '/images/Coffee/ProteinCoffee.webp'
  }
];

export const BIANCHI_MACHINE_SPECS: MachineHotspot[] = [
  {
    id: 'group-head',
    title: 'ISO-Spec Italian Extraction Group',
    subtitle: '15-Bar Constant Pressure Engine',
    description: 'Designed and manufactured in Milan, Italy. Uses heavy brass thermoblocks to maintain 92°C brew temperature with ±0.5°C stability.',
    x: 48,
    y: 32
  },
  {
    id: 'burr-grinder',
    title: 'Titanium Ceramic Flat Burrs',
    subtitle: 'Precision On-Demand Grinding',
    description: 'Grinds fresh Java Blend beans per cup in 2.8 seconds, eliminating heat transfer and preserving SCA 80+ delicate aromatic volatile compounds.',
    x: 52,
    y: 18
  },
  {
    id: 'touch-ui',
    title: 'HD Capacitive Touch Console',
    subtitle: 'Zero-Contact & Fast Touch Menu',
    description: 'Allows end-users to select custom brew strength, milk density, and mug sizes in under 3 seconds.',
    x: 50,
    y: 42
  },
  {
    id: 'eco-compost',
    title: '100% Automated Spent Grounds Composting',
    subtitle: 'Zero Waste Sustainability',
    description: 'Directly compresses spent coffee pucks into dry organic fertilizer discs, collected weekly for Nova Scotia community gardens.',
    x: 50,
    y: 78
  }
];
