import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Oversized Noir Tee',
    price: 85,
    category: 'T-Shirts',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Premium heavyweight cotton tee in deep obsidian. Features a relaxed silhouette and dropped shoulders for the ultimate streetwear look.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Ghost Silk Shirt',
    price: 145,
    category: 'Shirts',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Fluid silk-blend shirt with a subtle sheen. Minimalist design with hidden placket and tailored cuffs.',
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Midnight Drape Dress',
    price: 220,
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1539008835279-434674508233?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Elegant floor-length dress with architectural draping. Crafted from high-density jersey for a structured yet comfortable fit.',
    sizes: ['XS', 'S', 'M']
  },
  {
    id: '4',
    name: 'AJOVA Box Tee',
    price: 95,
    category: 'T-Shirts',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Signature box-cut tee with tonal embroidery. A staple piece for any modern wardrobe.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '5',
    name: 'Shadow Utility Shirt',
    price: 165,
    category: 'Shirts',
    images: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Technical utility shirt with multiple pockets and reinforced stitching. Water-resistant finish.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '6',
    name: 'Obsidian Slip Dress',
    price: 185,
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Minimalist slip dress with adjustable straps and side slit. Perfect for layering or wearing solo.',
    sizes: ['XS', 'S', 'M', 'L']
  }
];
