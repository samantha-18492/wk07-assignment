CREATE TABLE destination_details (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  city TEXT,
  country TEXT,
  type TEXT,
  duration TEXT,
  description TEXT,
  landmarks TEXT,
  image_url TEXT
)

ALTER TABLE destination_details ADD image_alt TEXT;

INSERT INTO destination_details (city, country, type, duration, description, landmarks, image_url, image_alt) VALUES ('Naples', 'Italy', 'City break', '3-4 days', 'A vibrant coastal city full of history, street life, and some of the world’s best pizza. Great base for Pompeii and nearby bays with dramatic volcanic views.', 'Pompeii, Mount Vesuvius, Naples Cathedral, Spaccanapoli', 'https://images.unsplash.com/photo-1599682715474-361182378581?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170', 'Colourful stalls along a street in Naples'), 

 ('Florence', 'Italy', 'City break', '3-4 days', 'The cradle of the Renaissance with world-class art and compact, walkable streets. Perfect for museum-hopping and lingering over Tuscan cuisine in atmospheric piazzas.', 'Cathedral of Santa Maria del Fiore (Duomo), Uffizi Gallery, Ponte Vecchio, Accademia', 'https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170', 'Skyline of neo-gothic architecture'), 

('Kotor', 'Montenegro', 'Adventure', '1 week', 'A UNESCO-listed town nestled between steep mountains and the sparkling Bay of Kotor. Its medieval streets, fortress views, and serene waterfront make it perfect for a relaxed yet adventurous getaway.', 'Bay of Kotor, Kotor Old Town, San Giovanni Fortress, Perast, Cats Museum', 'https://images.unsplash.com/photo-1719065354942-ed9c9b0fc8b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171', 'A cruise ship on a body of water with mountains either side'), 

('Las Vegas', 'USA', 'City break', '3-4 days', 'A high-energy entertainment capital known for iconic casinos, shows, and neon-lit boulevards. There are also nearby natural escapes for hiking and scenic drives away from the Strip.', 'The Strip, Bellagio Fountains, Fremont Street, Red Rock Canyon', 'https://images.unsplash.com/photo-1583207884889-d79abf0d0aa3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1184', 'City at dusk with buildings lit up'), 

('Yosemite National Park', 'USA', 'Adventure', '1 week', 'A dramatic wilderness of granite cliffs, giant sequoias, and towering waterfalls that reward both short visits and longer treks. Outdoor activities range from short viewpoint walks to multi-day climbing and backpacking routes.', 'Half Dome, El Capitan, Yosemite Falls, Glacier Point', 'https://images.unsplash.com/photo-1571681955876-8808c626a153?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170', 'Body of water surrounded by trees and mountains'), 

('San Francisco', 'USA', 'City break', '3-4 days', 'An iconic bay city with steep streets, famous bridges, and diverse neighbourhoods to explore. Excellent for food, waterfront strolls, and cultural sights in a compact area.', 'Golden Gate Bridge, Alcatraz, Fisherman’s Wharf, Lombard Street', 'https://images.unsplash.com/photo-1503609796759-4cfd4d5a0b9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172', 'Two old style trams going up a hill in a busy city'), 

('Hamilton Island', 'Australia', 'Beach', '1 week', 'A gateway to the Whitsundays with relaxed island vibes and easy access to white-sand beaches and reef tours. Great for sailing, snorkelling, and family-friendly beach time with scenic lookouts.', 'Catseye Beach, Whitsunday Islands (Heart Reef nearby), Dent Island, Hamilton Island Marina', 'https://images.unsplash.com/photo-1755928683108-6ef780a17382?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470', 'Beach area with palm trees and a vast ocean'), 

('Amsterdam', 'Netherlands', 'City break', '3-4 days', 'A compact, canal-laced city famed for its museums, cycling culture, and picturesque neighbourhoods. Ideal for relaxed exploration by bike or on foot with countless cafes and galleries to discover.', 'Anne Frank House, Van Gogh Museum, Rijksmuseum, Canal Ring', 'https://images.unsplash.com/photo-1459679749680-18eb1eb37418?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470', 'Colourful buildings next to a canal'), 

('Rhodes', 'Greece', 'Beach', '1 week', 'An island that combines golden beaches with a remarkably preserved medieval old town. Excellent for seaside relaxation as well as exploring ancient ruins and charming hilltop villages.', 'Medieval City of Rhodes, Lindos Acropolis, Valley of the Butterflies, Elli Beach', 'https://images.unsplash.com/photo-1596023396446-cd06efcba1bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1416', 'White yacht on the ocean near St Paul’s Bay'), 

('Barbados', 'Barbados', 'Beach', '1 week', 'A Caribbean island with turquoise waters, lively culture, and a mix of calm west coast beaches and surf on the east coast. Good for beach days, rum heritage, and coastal drives with scenic viewpoints.', 'Carlisle Bay, Bathsheba, St. Nicholas Abbey, Harrison’s Cave', 'https://images.unsplash.com/photo-1636728163078-59ea0afb7665?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1472', 'A sandy beach with waves coming in to shore'), 

('New York', 'USA', 'City break', '3-4 days', 'A fast-paced metropolis offering world-class museums, iconic skyline views, and endless neighbourhoods to explore. Perfect for a short, activity-packed city escape with cultural and culinary highlights.', 'Statue of Liberty, Central Park, Times Square, The Metropolitan Museum of Art', 'https://images.unsplash.com/photo-1585238326164-612cb4248873?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1486', 'Busy pedestrian street surrounded by tall buildings'),

('Cairo', 'Egypt', 'Adventure', '2 weeks', 'Egypt’s bustling capital blends ancient wonders with modern life along the Nile. Visitors can explore millennia-old monuments, vibrant markets, and world-class museums showcasing the country’s rich heritage.', 'Pyramids of Giza, The Sphinx, Egyptian Museum, Khan el-Khalili Bazaar', 'https://images.unsplash.com/photo-1692986172181-9f901997dcd6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374', 'Two camels sitting on the sand in front of three pyramids'), 

('Galapagos Islands', 'Ecuador', 'Adventure', '2 weeks', 'A unique wildlife destination famed for endemic species and dramatic volcanic landscapes, best experienced slowly to appreciate island-to-island variety. Activities focus on snorkelling, guided wildlife walks, and small-boat exploration.', 'Charles Darwin Research Station, Tortuga Bay, Devil’s Crown, Española Island', 'https://images.unsplash.com/photo-1599132104776-eeab32d45cfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470', 'Black and gray lizards resting on a white rock')


-------

CREATE TABLE destination_reviews (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  destination_id INT,
  name TEXT,
  comment TEXT
)

INSERT INTO destination_reviews (destination_id, name, comment) VALUES ('1', 'Sharon', 'Naples is full of charm! The streets are lively, the pizza is unbeatable, and the historic sites are fascinating. Definitely worth a visit. Just watch out for those mopeds!')

INSERT INTO destination_reviews (destination_id, name, comment) VALUES ('2', 'Leonna', 'Everything about Florence is magical - the art, the architecture, the charming streets. I loved wandering the piazzas, enjoying gelato, and taking in the stunning views from the Duomo. Such a beautiful city')

INSERT INTO destination_reviews (destination_id, name, comment) VALUES ('3', 'Phil', 'The lights, shows, and energy are nonstop so it’s not a place for the faint-hearted. Tried my luck in the casinos but didn’t hit the jackpot. Great fun exploring the Strip and soaking in the mental atmosphere')