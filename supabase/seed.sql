-- ============================================
-- Derive Shop - Database Schema & Seed Data
-- ============================================

-- Categories
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Collections
CREATE TABLE IF NOT EXISTS collections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  collection_id UUID REFERENCES collections(id) ON DELETE SET NULL,
  is_featured BOOLEAN DEFAULT FALSE,
  tag TEXT CHECK (tag IN ('new_arrival', 'back_in_stock', 'sold_out', NULL)),
  details TEXT,
  product_care TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Product Images
CREATE TABLE IF NOT EXISTS product_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt_text TEXT,
  position INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT FALSE
);

-- Product Variants (sizes)
CREATE TABLE IF NOT EXISTS product_variants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  size TEXT NOT NULL,
  stock_quantity INTEGER DEFAULT 0
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_collection ON products(collection_id);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_product_images_product ON product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_product_variants_product ON product_variants(product_id);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_collections_slug ON collections(slug);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Allow public read access" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON collections FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON product_images FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON product_variants FOR SELECT USING (true);

-- ============================================
-- Seed Data
-- ============================================

-- Categories
INSERT INTO categories (id, name, slug) VALUES
  ('a1000000-0000-0000-0000-000000000001', 'Shirts', 'shirts'),
  ('a1000000-0000-0000-0000-000000000002', 'Jackets', 'jackets'),
  ('a1000000-0000-0000-0000-000000000003', 'Pants', 'pants'),
  ('a1000000-0000-0000-0000-000000000004', 'Accessories', 'accessories');

-- Collections
INSERT INTO collections (id, name, slug, description) VALUES
  ('b1000000-0000-0000-0000-000000000001', 'Summer 2026', 'summer-2026', 'Our latest summer collection featuring hand-painted graphics and premium cotton.'),
  ('b1000000-0000-0000-0000-000000000002', 'Essentials', 'essentials', 'Timeless wardrobe staples crafted with care.');

-- Products
INSERT INTO products (id, name, slug, description, price, category_id, collection_id, is_featured, tag, details, product_care) VALUES
  (
    'c1000000-0000-0000-0000-000000000001',
    'Jazz Band T-Shirt',
    'jazz-band-t-shirt',
    'A celebration of jazz culture, this t-shirt features a hand-painted watercolour illustration of a full jazz ensemble. Crafted from soft midweight cotton with a slightly cropped, boxy fit and ribbed neckline.',
    50.00,
    'a1000000-0000-0000-0000-000000000001',
    'b1000000-0000-0000-0000-000000000001',
    TRUE,
    'new_arrival',
    '- Slightly Cropped & Boxy Fit\n- 260 GSM\n- 100% Cotton\n- Direct to Garment Print',
    'Machine wash cold with like colours. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.'
  ),
  (
    'c1000000-0000-0000-0000-000000000002',
    'Beautiful Game T-Shirt',
    'beautiful-game-t-shirt',
    'Inspired by our love of football and designed using our Everyday t-shirt fit, the Beautiful Game T-Shirt is crafted from soft midweight cotton, features a direct-to-garment custom watercolour football graphic and a ribbed neckline.',
    50.00,
    'a1000000-0000-0000-0000-000000000001',
    'b1000000-0000-0000-0000-000000000001',
    TRUE,
    NULL,
    '- Slightly Cropped & Boxy Fit\n- 260 GSM\n- 100% Cotton\n- Direct to Garment Print',
    'Machine wash cold with like colours. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.'
  ),
  (
    'c1000000-0000-0000-0000-000000000003',
    'Flower Bouquet T-Shirt',
    'flower-bouquet-t-shirt',
    'Featuring a vibrant hand-painted floral arrangement, this tee brings artistry to your everyday wardrobe. Made from premium midweight cotton with our signature boxy silhouette.',
    50.00,
    'a1000000-0000-0000-0000-000000000001',
    'b1000000-0000-0000-0000-000000000001',
    TRUE,
    'new_arrival',
    '- Slightly Cropped & Boxy Fit\n- 260 GSM\n- 100% Cotton\n- Direct to Garment Print',
    'Machine wash cold with like colours. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.'
  ),
  (
    'c1000000-0000-0000-0000-000000000004',
    'Tennis Court T-Shirt',
    'tennis-court-t-shirt',
    'A love letter to the sport of tennis, this graphic tee features a watercolour courtside scene. Crafted from soft midweight cotton with a slightly cropped, boxy fit.',
    50.00,
    'a1000000-0000-0000-0000-000000000001',
    'b1000000-0000-0000-0000-000000000001',
    TRUE,
    NULL,
    '- Slightly Cropped & Boxy Fit\n- 260 GSM\n- 100% Cotton\n- Direct to Garment Print',
    'Machine wash cold with like colours. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.'
  ),
  (
    'c1000000-0000-0000-0000-000000000005',
    'Quilted Jacket',
    'quilted-jacket',
    'A premium quilted jacket with corduroy collar detail. Featuring diamond quilting, two front pockets, and a full zip closure. The perfect layering piece for transitional weather.',
    165.00,
    'a1000000-0000-0000-0000-000000000002',
    'b1000000-0000-0000-0000-000000000002',
    TRUE,
    NULL,
    '- Regular Fit\n- Diamond Quilted\n- Corduroy Collar\n- Full Zip Closure\n- Two Front Pockets',
    'Dry clean only. Store on a padded hanger. Do not bleach or iron.'
  ),
  (
    'c1000000-0000-0000-0000-000000000006',
    'Dinner Jacket',
    'dinner-jacket',
    'A sophisticated lightweight jacket crafted from premium black fabric. Features a clean, minimal silhouette with a zip closure and subtle branding. Perfect for evening occasions.',
    162.00,
    'a1000000-0000-0000-0000-000000000002',
    'b1000000-0000-0000-0000-000000000002',
    TRUE,
    NULL,
    '- Slim Fit\n- Lightweight Fabric\n- Zip Closure\n- Internal Pocket',
    'Dry clean recommended. Iron on low heat. Do not bleach. Store on a padded hanger.'
  ),
  (
    'c1000000-0000-0000-0000-000000000007',
    'Straight Cut Denim (Aged Black)',
    'straight-cut-denim-aged-black',
    'Premium aged black denim in our signature straight cut. Features a classic five-pocket design with subtle distressing for a lived-in look. Made from heavyweight Japanese selvedge denim.',
    161.00,
    'a1000000-0000-0000-0000-000000000003',
    'b1000000-0000-0000-0000-000000000002',
    TRUE,
    NULL,
    '- Straight Leg Cut\n- 14oz Japanese Selvedge Denim\n- Aged Black Wash\n- Five-Pocket Design\n- Button Fly',
    'Wash sparingly in cold water. Turn inside out. Hang dry. Do not bleach. Iron inside out on low heat.'
  ),
  (
    'c1000000-0000-0000-0000-000000000008',
    'Everyday Pleats',
    'everyday-pleats',
    'Our signature pleated trouser in classic black. Crafted from a premium cotton blend with a high rise and tapered leg. Features front pleats and side pockets for a refined everyday look.',
    145.00,
    'a1000000-0000-0000-0000-000000000003',
    'b1000000-0000-0000-0000-000000000002',
    FALSE,
    'new_arrival',
    '- High Rise\n- Tapered Leg\n- Front Pleats\n- Cotton Blend\n- Side & Back Pockets',
    'Machine wash cold. Hang dry. Iron on medium heat. Do not bleach.'
  ),
  (
    'c1000000-0000-0000-0000-000000000009',
    'Leather Bomber Jacket',
    'leather-bomber-jacket',
    'A premium leather bomber jacket in dark olive. Features a classic bomber silhouette with ribbed cuffs and hem, front zip closure, and internal pocket.',
    275.00,
    'a1000000-0000-0000-0000-000000000002',
    NULL,
    FALSE,
    NULL,
    '- Regular Fit\n- 100% Genuine Leather\n- Ribbed Cuffs & Hem\n- Zip Closure\n- Internal Pocket',
    'Professional leather clean only. Store in a cool, dry place. Condition regularly.'
  ),
  (
    'c1000000-0000-0000-0000-000000000010',
    'Cowhide Belt',
    'cowhide-belt',
    'A premium cowhide leather belt with a brushed silver buckle. Features a unique marbled pattern for a one-of-a-kind accessory.',
    52.00,
    'a1000000-0000-0000-0000-000000000004',
    NULL,
    FALSE,
    'back_in_stock',
    '- 100% Cowhide Leather\n- Brushed Silver Buckle\n- Marbled Pattern\n- 3.5cm Width',
    'Wipe clean with a damp cloth. Condition with leather cream periodically. Store rolled, not folded.'
  ),
  (
    'c1000000-0000-0000-0000-000000000011',
    'Emblem Hat',
    'emblem-hat',
    'A classic structured cap in navy featuring our embroidered emblem. Made from durable cotton twill with an adjustable brass buckle closure.',
    47.00,
    'a1000000-0000-0000-0000-000000000004',
    'b1000000-0000-0000-0000-000000000001',
    FALSE,
    NULL,
    '- Structured Crown\n- Embroidered Emblem\n- Cotton Twill\n- Adjustable Brass Buckle',
    'Spot clean only. Do not machine wash. Air dry. Do not bleach or iron.'
  ),
  (
    'c1000000-0000-0000-0000-000000000012',
    'Suede Dinner Jacket (Brown)',
    'suede-dinner-jacket-brown',
    'A luxurious suede dinner jacket in rich brown. Features a clean, tailored silhouette with a button closure and patch pockets.',
    275.00,
    'a1000000-0000-0000-0000-000000000002',
    NULL,
    FALSE,
    NULL,
    '- Tailored Fit\n- 100% Suede Leather\n- Button Closure\n- Patch Pockets\n- Lined Interior',
    'Professional suede clean only. Use a suede brush for maintenance. Store in a breathable garment bag.'
  );

-- Product Images (using showcase images as placeholders, cycling through them)
INSERT INTO product_images (product_id, url, alt_text, position, is_primary) VALUES
  -- Jazz Band T-Shirt
  ('c1000000-0000-0000-0000-000000000001', '/showcase/SYDWEB_017.webp', 'Jazz Band T-Shirt - Front', 0, TRUE),
  ('c1000000-0000-0000-0000-000000000001', '/showcase/657357036_18129275986489748_8570339808255903415_n.jpg', 'Jazz Band T-Shirt - Detail', 1, FALSE),
  ('c1000000-0000-0000-0000-000000000001', '/showcase/ChatGPT Image 3. Apr. 2026, 19_16_43.png', 'Jazz Band T-Shirt - Alternate', 2, FALSE),

  -- Beautiful Game T-Shirt
  ('c1000000-0000-0000-0000-000000000002', '/showcase/Mutimer football tshirt.jpg', 'Beautiful Game T-Shirt - Front', 0, TRUE),
  ('c1000000-0000-0000-0000-000000000002', '/showcase/SYDWEB_017.webp', 'Beautiful Game T-Shirt - Styled', 1, FALSE),

  -- Flower Bouquet T-Shirt
  ('c1000000-0000-0000-0000-000000000003', '/showcase/490328331_982554810629045_7420410672390072658_n.jpg', 'Flower Bouquet T-Shirt - Front', 0, TRUE),
  ('c1000000-0000-0000-0000-000000000003', '/showcase/SYDWEB_017.webp', 'Flower Bouquet T-Shirt - Styled', 1, FALSE),

  -- Tennis Court T-Shirt
  ('c1000000-0000-0000-0000-000000000004', '/showcase/ChatGPT Image 15. März 2026, 21_28_36.png', 'Tennis Court T-Shirt - Front', 0, TRUE),
  ('c1000000-0000-0000-0000-000000000004', '/showcase/657357036_18129275986489748_8570339808255903415_n.jpg', 'Tennis Court T-Shirt - Styled', 1, FALSE),

  -- Quilted Jacket (reusing images as placeholders)
  ('c1000000-0000-0000-0000-000000000005', '/showcase/SYDWEB_017.webp', 'Quilted Jacket - Front', 0, TRUE),
  ('c1000000-0000-0000-0000-000000000005', '/showcase/657357036_18129275986489748_8570339808255903415_n.jpg', 'Quilted Jacket - Detail', 1, FALSE),

  -- Dinner Jacket
  ('c1000000-0000-0000-0000-000000000006', '/showcase/ChatGPT Image 3. Apr. 2026, 19_16_43.png', 'Dinner Jacket - Front', 0, TRUE),
  ('c1000000-0000-0000-0000-000000000006', '/showcase/SYDWEB_017.webp', 'Dinner Jacket - Detail', 1, FALSE),

  -- Straight Cut Denim
  ('c1000000-0000-0000-0000-000000000007', '/showcase/490328331_982554810629045_7420410672390072658_n.jpg', 'Straight Cut Denim - Front', 0, TRUE),
  ('c1000000-0000-0000-0000-000000000007', '/showcase/Mutimer football tshirt.jpg', 'Straight Cut Denim - Detail', 1, FALSE),

  -- Everyday Pleats
  ('c1000000-0000-0000-0000-000000000008', '/showcase/ChatGPT Image 15. März 2026, 21_28_36.png', 'Everyday Pleats - Front', 0, TRUE),

  -- Leather Bomber Jacket
  ('c1000000-0000-0000-0000-000000000009', '/showcase/657357036_18129275986489748_8570339808255903415_n.jpg', 'Leather Bomber Jacket - Front', 0, TRUE),

  -- Cowhide Belt
  ('c1000000-0000-0000-0000-000000000010', '/showcase/Mutimer football tshirt.jpg', 'Cowhide Belt - Front', 0, TRUE),

  -- Emblem Hat
  ('c1000000-0000-0000-0000-000000000011', '/showcase/490328331_982554810629045_7420410672390072658_n.jpg', 'Emblem Hat - Front', 0, TRUE),

  -- Suede Dinner Jacket
  ('c1000000-0000-0000-0000-000000000012', '/showcase/ChatGPT Image 3. Apr. 2026, 19_16_43.png', 'Suede Dinner Jacket - Front', 0, TRUE);

-- Product Variants (sizes)
-- T-Shirts: XS, S, M, L, XL
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES
  ('c1000000-0000-0000-0000-000000000001', 'XS', 5),
  ('c1000000-0000-0000-0000-000000000001', 'S', 12),
  ('c1000000-0000-0000-0000-000000000001', 'M', 15),
  ('c1000000-0000-0000-0000-000000000001', 'L', 10),
  ('c1000000-0000-0000-0000-000000000001', 'XL', 6),

  ('c1000000-0000-0000-0000-000000000002', 'XS', 3),
  ('c1000000-0000-0000-0000-000000000002', 'S', 8),
  ('c1000000-0000-0000-0000-000000000002', 'M', 14),
  ('c1000000-0000-0000-0000-000000000002', 'L', 11),
  ('c1000000-0000-0000-0000-000000000002', 'XL', 7),

  ('c1000000-0000-0000-0000-000000000003', 'XS', 4),
  ('c1000000-0000-0000-0000-000000000003', 'S', 10),
  ('c1000000-0000-0000-0000-000000000003', 'M', 13),
  ('c1000000-0000-0000-0000-000000000003', 'L', 9),
  ('c1000000-0000-0000-0000-000000000003', 'XL', 5),

  ('c1000000-0000-0000-0000-000000000004', 'XS', 6),
  ('c1000000-0000-0000-0000-000000000004', 'S', 11),
  ('c1000000-0000-0000-0000-000000000004', 'M', 16),
  ('c1000000-0000-0000-0000-000000000004', 'L', 12),
  ('c1000000-0000-0000-0000-000000000004', 'XL', 4),

  -- Jackets: S, M, L, XL
  ('c1000000-0000-0000-0000-000000000005', 'S', 6),
  ('c1000000-0000-0000-0000-000000000005', 'M', 8),
  ('c1000000-0000-0000-0000-000000000005', 'L', 7),
  ('c1000000-0000-0000-0000-000000000005', 'XL', 4),

  ('c1000000-0000-0000-0000-000000000006', 'S', 5),
  ('c1000000-0000-0000-0000-000000000006', 'M', 9),
  ('c1000000-0000-0000-0000-000000000006', 'L', 7),
  ('c1000000-0000-0000-0000-000000000006', 'XL', 3),

  -- Pants: 28, 30, 32, 34, 36
  ('c1000000-0000-0000-0000-000000000007', '28', 4),
  ('c1000000-0000-0000-0000-000000000007', '30', 8),
  ('c1000000-0000-0000-0000-000000000007', '32', 10),
  ('c1000000-0000-0000-0000-000000000007', '34', 7),
  ('c1000000-0000-0000-0000-000000000007', '36', 3),

  ('c1000000-0000-0000-0000-000000000008', '28', 5),
  ('c1000000-0000-0000-0000-000000000008', '30', 9),
  ('c1000000-0000-0000-0000-000000000008', '32', 12),
  ('c1000000-0000-0000-0000-000000000008', '34', 8),
  ('c1000000-0000-0000-0000-000000000008', '36', 4),

  -- Leather Bomber
  ('c1000000-0000-0000-0000-000000000009', 'S', 3),
  ('c1000000-0000-0000-0000-000000000009', 'M', 5),
  ('c1000000-0000-0000-0000-000000000009', 'L', 4),
  ('c1000000-0000-0000-0000-000000000009', 'XL', 2),

  -- Belt: S, M, L
  ('c1000000-0000-0000-0000-000000000010', 'S', 8),
  ('c1000000-0000-0000-0000-000000000010', 'M', 12),
  ('c1000000-0000-0000-0000-000000000010', 'L', 10),

  -- Hat: One Size
  ('c1000000-0000-0000-0000-000000000011', 'One Size', 20),

  -- Suede Dinner Jacket
  ('c1000000-0000-0000-0000-000000000012', 'S', 4),
  ('c1000000-0000-0000-0000-000000000012', 'M', 6),
  ('c1000000-0000-0000-0000-000000000012', 'L', 5),
  ('c1000000-0000-0000-0000-000000000012', 'XL', 3);
