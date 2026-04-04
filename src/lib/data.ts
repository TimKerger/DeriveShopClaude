import {
  Category,
  Collection,
  Product,
  ProductImage,
  ProductVariant,
  ProductWithDetails,
} from "./supabase/types";

// Mock data that mirrors the seed.sql for local development without Supabase

const categories: Category[] = [
  { id: "a1000000-0000-0000-0000-000000000001", name: "Shirts", slug: "shirts", created_at: "" },
  { id: "a1000000-0000-0000-0000-000000000002", name: "Jackets", slug: "jackets", created_at: "" },
  { id: "a1000000-0000-0000-0000-000000000003", name: "Pants", slug: "pants", created_at: "" },
  { id: "a1000000-0000-0000-0000-000000000004", name: "Accessories", slug: "accessories", created_at: "" },
];

const collections: Collection[] = [
  { id: "b1000000-0000-0000-0000-000000000001", name: "Summer 2026", slug: "summer-2026", description: "Our latest summer collection featuring hand-painted graphics and premium cotton.", created_at: "" },
  { id: "b1000000-0000-0000-0000-000000000002", name: "Essentials", slug: "essentials", description: "Timeless wardrobe staples crafted with care.", created_at: "" },
];

const products: Product[] = [
  {
    id: "c1000000-0000-0000-0000-000000000001",
    name: "Jazz Band T-Shirt",
    slug: "jazz-band-t-shirt",
    description: "A celebration of jazz culture, this t-shirt features a hand-painted watercolour illustration of a full jazz ensemble. Crafted from soft midweight cotton with a slightly cropped, boxy fit and ribbed neckline.",
    price: 50.0,
    category_id: "a1000000-0000-0000-0000-000000000001",
    collection_id: "b1000000-0000-0000-0000-000000000001",
    is_featured: true,
    tag: "new_arrival",
    details: "- Slightly Cropped & Boxy Fit\n- 260 GSM\n- 100% Cotton\n- Direct to Garment Print",
    product_care: "Machine wash cold with like colours. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000002",
    name: "Beautiful Game T-Shirt",
    slug: "beautiful-game-t-shirt",
    description: "Inspired by our love of football and designed using our Everyday t-shirt fit, the Beautiful Game T-Shirt is crafted from soft midweight cotton, features a direct-to-garment custom watercolour football graphic and a ribbed neckline.",
    price: 50.0,
    category_id: "a1000000-0000-0000-0000-000000000001",
    collection_id: "b1000000-0000-0000-0000-000000000001",
    is_featured: true,
    tag: null,
    details: "- Slightly Cropped & Boxy Fit\n- 260 GSM\n- 100% Cotton\n- Direct to Garment Print",
    product_care: "Machine wash cold with like colours. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000003",
    name: "Flower Bouquet T-Shirt",
    slug: "flower-bouquet-t-shirt",
    description: "Featuring a vibrant hand-painted floral arrangement, this tee brings artistry to your everyday wardrobe. Made from premium midweight cotton with our signature boxy silhouette.",
    price: 50.0,
    category_id: "a1000000-0000-0000-0000-000000000001",
    collection_id: "b1000000-0000-0000-0000-000000000001",
    is_featured: true,
    tag: "new_arrival",
    details: "- Slightly Cropped & Boxy Fit\n- 260 GSM\n- 100% Cotton\n- Direct to Garment Print",
    product_care: "Machine wash cold with like colours. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000004",
    name: "Tennis Court T-Shirt",
    slug: "tennis-court-t-shirt",
    description: "A love letter to the sport of tennis, this graphic tee features a watercolour courtside scene. Crafted from soft midweight cotton with a slightly cropped, boxy fit.",
    price: 50.0,
    category_id: "a1000000-0000-0000-0000-000000000001",
    collection_id: "b1000000-0000-0000-0000-000000000001",
    is_featured: true,
    tag: null,
    details: "- Slightly Cropped & Boxy Fit\n- 260 GSM\n- 100% Cotton\n- Direct to Garment Print",
    product_care: "Machine wash cold with like colours. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000005",
    name: "Quilted Jacket",
    slug: "quilted-jacket",
    description: "A premium quilted jacket with corduroy collar detail. Featuring diamond quilting, two front pockets, and a full zip closure. The perfect layering piece for transitional weather.",
    price: 165.0,
    category_id: "a1000000-0000-0000-0000-000000000002",
    collection_id: "b1000000-0000-0000-0000-000000000002",
    is_featured: true,
    tag: null,
    details: "- Regular Fit\n- Diamond Quilted\n- Corduroy Collar\n- Full Zip Closure\n- Two Front Pockets",
    product_care: "Dry clean only. Store on a padded hanger. Do not bleach or iron.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000006",
    name: "Dinner Jacket",
    slug: "dinner-jacket",
    description: "A sophisticated lightweight jacket crafted from premium black fabric. Features a clean, minimal silhouette with a zip closure and subtle branding. Perfect for evening occasions.",
    price: 162.0,
    category_id: "a1000000-0000-0000-0000-000000000002",
    collection_id: "b1000000-0000-0000-0000-000000000002",
    is_featured: true,
    tag: null,
    details: "- Slim Fit\n- Lightweight Fabric\n- Zip Closure\n- Internal Pocket",
    product_care: "Dry clean recommended. Iron on low heat. Do not bleach. Store on a padded hanger.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000007",
    name: "Straight Cut Denim (Aged Black)",
    slug: "straight-cut-denim-aged-black",
    description: "Premium aged black denim in our signature straight cut. Features a classic five-pocket design with subtle distressing for a lived-in look. Made from heavyweight Japanese selvedge denim.",
    price: 161.0,
    category_id: "a1000000-0000-0000-0000-000000000003",
    collection_id: "b1000000-0000-0000-0000-000000000002",
    is_featured: true,
    tag: null,
    details: "- Straight Leg Cut\n- 14oz Japanese Selvedge Denim\n- Aged Black Wash\n- Five-Pocket Design\n- Button Fly",
    product_care: "Wash sparingly in cold water. Turn inside out. Hang dry. Do not bleach. Iron inside out on low heat.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000008",
    name: "Everyday Pleats",
    slug: "everyday-pleats",
    description: "Our signature pleated trouser in classic black. Crafted from a premium cotton blend with a high rise and tapered leg.",
    price: 145.0,
    category_id: "a1000000-0000-0000-0000-000000000003",
    collection_id: "b1000000-0000-0000-0000-000000000002",
    is_featured: false,
    tag: "new_arrival",
    details: "- High Rise\n- Tapered Leg\n- Front Pleats\n- Cotton Blend\n- Side & Back Pockets",
    product_care: "Machine wash cold. Hang dry. Iron on medium heat. Do not bleach.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000009",
    name: "Leather Bomber Jacket",
    slug: "leather-bomber-jacket",
    description: "A premium leather bomber jacket in dark olive. Features a classic bomber silhouette with ribbed cuffs and hem, front zip closure, and internal pocket.",
    price: 275.0,
    category_id: "a1000000-0000-0000-0000-000000000002",
    collection_id: null,
    is_featured: false,
    tag: null,
    details: "- Regular Fit\n- 100% Genuine Leather\n- Ribbed Cuffs & Hem\n- Zip Closure\n- Internal Pocket",
    product_care: "Professional leather clean only. Store in a cool, dry place. Condition regularly.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000010",
    name: "Cowhide Belt",
    slug: "cowhide-belt",
    description: "A premium cowhide leather belt with a brushed silver buckle. Features a unique marbled pattern for a one-of-a-kind accessory.",
    price: 52.0,
    category_id: "a1000000-0000-0000-0000-000000000004",
    collection_id: null,
    is_featured: false,
    tag: "back_in_stock",
    details: "- 100% Cowhide Leather\n- Brushed Silver Buckle\n- Marbled Pattern\n- 3.5cm Width",
    product_care: "Wipe clean with a damp cloth. Condition with leather cream periodically. Store rolled, not folded.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000011",
    name: "Emblem Hat",
    slug: "emblem-hat",
    description: "A classic structured cap in navy featuring our embroidered emblem. Made from durable cotton twill with an adjustable brass buckle closure.",
    price: 47.0,
    category_id: "a1000000-0000-0000-0000-000000000004",
    collection_id: "b1000000-0000-0000-0000-000000000001",
    is_featured: false,
    tag: null,
    details: "- Structured Crown\n- Embroidered Emblem\n- Cotton Twill\n- Adjustable Brass Buckle",
    product_care: "Spot clean only. Do not machine wash. Air dry. Do not bleach or iron.",
    created_at: "",
  },
  {
    id: "c1000000-0000-0000-0000-000000000012",
    name: "Suede Dinner Jacket (Brown)",
    slug: "suede-dinner-jacket-brown",
    description: "A luxurious suede dinner jacket in rich brown. Features a clean, tailored silhouette with a button closure and patch pockets.",
    price: 275.0,
    category_id: "a1000000-0000-0000-0000-000000000002",
    collection_id: null,
    is_featured: false,
    tag: null,
    details: "- Tailored Fit\n- 100% Suede Leather\n- Button Closure\n- Patch Pockets\n- Lined Interior",
    product_care: "Professional suede clean only. Use a suede brush for maintenance. Store in a breathable garment bag.",
    created_at: "",
  },
];

const productImages: ProductImage[] = [
  { id: "i1", product_id: "c1000000-0000-0000-0000-000000000001", url: "/showcase/SYDWEB_017.webp", alt_text: "Jazz Band T-Shirt - Front", position: 0, is_primary: true },
  { id: "i2", product_id: "c1000000-0000-0000-0000-000000000001", url: "/showcase/657357036_18129275986489748_8570339808255903415_n.jpg", alt_text: "Jazz Band T-Shirt - Detail", position: 1, is_primary: false },
  { id: "i3", product_id: "c1000000-0000-0000-0000-000000000001", url: "/showcase/ChatGPT Image 3. Apr. 2026, 19_16_43.png", alt_text: "Jazz Band T-Shirt - Alternate", position: 2, is_primary: false },

  { id: "i4", product_id: "c1000000-0000-0000-0000-000000000002", url: "/showcase/Mutimer football tshirt.jpg", alt_text: "Beautiful Game T-Shirt - Front", position: 0, is_primary: true },
  { id: "i5", product_id: "c1000000-0000-0000-0000-000000000002", url: "/showcase/SYDWEB_017.webp", alt_text: "Beautiful Game T-Shirt - Styled", position: 1, is_primary: false },

  { id: "i6", product_id: "c1000000-0000-0000-0000-000000000003", url: "/showcase/490328331_982554810629045_7420410672390072658_n.jpg", alt_text: "Flower Bouquet T-Shirt - Front", position: 0, is_primary: true },
  { id: "i7", product_id: "c1000000-0000-0000-0000-000000000003", url: "/showcase/SYDWEB_017.webp", alt_text: "Flower Bouquet T-Shirt - Styled", position: 1, is_primary: false },

  { id: "i8", product_id: "c1000000-0000-0000-0000-000000000004", url: "/showcase/ChatGPT Image 15. März 2026, 21_28_36.png", alt_text: "Tennis Court T-Shirt - Front", position: 0, is_primary: true },
  { id: "i9", product_id: "c1000000-0000-0000-0000-000000000004", url: "/showcase/657357036_18129275986489748_8570339808255903415_n.jpg", alt_text: "Tennis Court T-Shirt - Styled", position: 1, is_primary: false },

  { id: "i10", product_id: "c1000000-0000-0000-0000-000000000005", url: "/showcase/SYDWEB_017.webp", alt_text: "Quilted Jacket - Front", position: 0, is_primary: true },
  { id: "i11", product_id: "c1000000-0000-0000-0000-000000000005", url: "/showcase/657357036_18129275986489748_8570339808255903415_n.jpg", alt_text: "Quilted Jacket - Detail", position: 1, is_primary: false },

  { id: "i12", product_id: "c1000000-0000-0000-0000-000000000006", url: "/showcase/ChatGPT Image 3. Apr. 2026, 19_16_43.png", alt_text: "Dinner Jacket - Front", position: 0, is_primary: true },
  { id: "i13", product_id: "c1000000-0000-0000-0000-000000000006", url: "/showcase/SYDWEB_017.webp", alt_text: "Dinner Jacket - Detail", position: 1, is_primary: false },

  { id: "i14", product_id: "c1000000-0000-0000-0000-000000000007", url: "/showcase/490328331_982554810629045_7420410672390072658_n.jpg", alt_text: "Straight Cut Denim - Front", position: 0, is_primary: true },
  { id: "i15", product_id: "c1000000-0000-0000-0000-000000000007", url: "/showcase/Mutimer football tshirt.jpg", alt_text: "Straight Cut Denim - Detail", position: 1, is_primary: false },

  { id: "i16", product_id: "c1000000-0000-0000-0000-000000000008", url: "/showcase/ChatGPT Image 15. März 2026, 21_28_36.png", alt_text: "Everyday Pleats - Front", position: 0, is_primary: true },

  { id: "i17", product_id: "c1000000-0000-0000-0000-000000000009", url: "/showcase/657357036_18129275986489748_8570339808255903415_n.jpg", alt_text: "Leather Bomber Jacket - Front", position: 0, is_primary: true },

  { id: "i18", product_id: "c1000000-0000-0000-0000-000000000010", url: "/showcase/Mutimer football tshirt.jpg", alt_text: "Cowhide Belt - Front", position: 0, is_primary: true },

  { id: "i19", product_id: "c1000000-0000-0000-0000-000000000011", url: "/showcase/490328331_982554810629045_7420410672390072658_n.jpg", alt_text: "Emblem Hat - Front", position: 0, is_primary: true },

  { id: "i20", product_id: "c1000000-0000-0000-0000-000000000012", url: "/showcase/ChatGPT Image 3. Apr. 2026, 19_16_43.png", alt_text: "Suede Dinner Jacket - Front", position: 0, is_primary: true },
];

const productVariants: ProductVariant[] = [
  // T-Shirts
  ...["c1000000-0000-0000-0000-000000000001", "c1000000-0000-0000-0000-000000000002", "c1000000-0000-0000-0000-000000000003", "c1000000-0000-0000-0000-000000000004"].flatMap((pid) =>
    ["XS", "S", "M", "L", "XL"].map((size, i) => ({ id: `v-${pid}-${i}`, product_id: pid, size, stock_quantity: 5 + i * 2 }))
  ),
  // Jackets
  ...["c1000000-0000-0000-0000-000000000005", "c1000000-0000-0000-0000-000000000006", "c1000000-0000-0000-0000-000000000009", "c1000000-0000-0000-0000-000000000012"].flatMap((pid) =>
    ["S", "M", "L", "XL"].map((size, i) => ({ id: `v-${pid}-${i}`, product_id: pid, size, stock_quantity: 3 + i * 2 }))
  ),
  // Pants
  ...["c1000000-0000-0000-0000-000000000007", "c1000000-0000-0000-0000-000000000008"].flatMap((pid) =>
    ["28", "30", "32", "34", "36"].map((size, i) => ({ id: `v-${pid}-${i}`, product_id: pid, size, stock_quantity: 4 + i * 2 }))
  ),
  // Belt
  ...["S", "M", "L"].map((size, i) => ({ id: `v-belt-${i}`, product_id: "c1000000-0000-0000-0000-000000000010", size, stock_quantity: 8 + i * 2 })),
  // Hat
  { id: "v-hat-0", product_id: "c1000000-0000-0000-0000-000000000011", size: "One Size", stock_quantity: 20 },
];

export function getCategories(): Category[] {
  return categories;
}

export function getCollections(): Collection[] {
  return collections;
}

export function getProducts(options?: {
  categorySlug?: string;
  collectionSlug?: string;
  limit?: number;
  offset?: number;
  sort?: string;
}): { products: ProductWithDetails[]; total: number } {
  let filtered = [...products];

  if (options?.categorySlug) {
    const cat = categories.find((c) => c.slug === options.categorySlug);
    if (cat) filtered = filtered.filter((p) => p.category_id === cat.id);
  }

  if (options?.collectionSlug && options.collectionSlug !== "all") {
    const col = collections.find((c) => c.slug === options.collectionSlug);
    if (col) filtered = filtered.filter((p) => p.collection_id === col.id);
  }

  if (options?.sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (options?.sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (options?.sort === "newest") filtered.sort((a, b) => b.created_at.localeCompare(a.created_at));

  const total = filtered.length;
  const limit = options?.limit ?? 24;
  const offset = options?.offset ?? 0;
  filtered = filtered.slice(offset, offset + limit);

  return {
    products: filtered.map((p) => ({
      ...p,
      category: categories.find((c) => c.id === p.category_id) ?? null,
      collection: collections.find((c) => c.id === p.collection_id) ?? null,
      product_images: productImages.filter((img) => img.product_id === p.id).sort((a, b) => a.position - b.position),
      product_variants: productVariants.filter((v) => v.product_id === p.id),
    })),
    total,
  };
}

export function getProductBySlug(slug: string): ProductWithDetails | null {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  return {
    ...product,
    category: categories.find((c) => c.id === product.category_id) ?? null,
    collection: collections.find((c) => c.id === product.collection_id) ?? null,
    product_images: productImages.filter((img) => img.product_id === product.id).sort((a, b) => a.position - b.position),
    product_variants: productVariants.filter((v) => v.product_id === product.id),
  };
}

export function getRelatedProducts(productId: string, categoryId: string | null, limit = 6): ProductWithDetails[] {
  const related = products
    .filter((p) => p.id !== productId && (categoryId ? p.category_id === categoryId : true))
    .slice(0, limit);

  return related.map((p) => ({
    ...p,
    category: categories.find((c) => c.id === p.category_id) ?? null,
    collection: collections.find((c) => c.id === p.collection_id) ?? null,
    product_images: productImages.filter((img) => img.product_id === p.id).sort((a, b) => a.position - b.position),
    product_variants: productVariants.filter((v) => v.product_id === p.id),
  }));
}
