/* 

Usage: Replace path to tempprettypics file & run from terminal:

psql -h localhost -d ynck_devel -U postgres -p 5432 -a -q -f /Users/anyu/Desktop/HackReactor/Projects/ynck/db/tempprettypics.js

*/

\connect ynck_devel;

delete from images where "favoriteCount"=120;

INSERT INTO images (id, url, profile_id, created_at, "favoriteCount", image_type) VALUES (1200, 'http://res.cloudinary.com/diekho60x/image/upload/v1496524271/tattoo1_ichxhs.jpg', 1, '2017-07-06T21:18:02.967Z', 120, 'tattoo');
INSERT INTO images (id, url, profile_id, created_at, "favoriteCount", image_type) VALUES (1201, 'http://res.cloudinary.com/diekho60x/image/upload/v1496524271/tattoo2_s6ecmx.jpg', 1, '2017-07-06T21:18:02.967Z', 120, 'tattoo');
INSERT INTO images (id, url, profile_id, created_at, "favoriteCount", image_type) VALUES (1202, 'http://res.cloudinary.com/diekho60x/image/upload/v1496524271/tattoo3_m706e2.jpg', 1, '2017-07-06T21:18:02.967Z', 120, 'tattoo');
INSERT INTO images (id, url, profile_id, created_at, "favoriteCount", image_type) VALUES (1203, 'http://res.cloudinary.com/diekho60x/image/upload/v1496641204/tattoo4_ayljrz.jpg', 1, '2017-07-06T21:18:02.967Z', 120, 'tattoo');
INSERT INTO images (id, url, profile_id, created_at, "favoriteCount", image_type) VALUES (1204, 'http://res.cloudinary.com/diekho60x/image/upload/v1496641141/tattoo5_pijnsn.jpg', 1, '2017-07-06T21:18:02.967Z', 120, 'tattoo');
INSERT INTO images (id, url, profile_id, created_at, "favoriteCount", image_type) VALUES (1205, 'http://res.cloudinary.com/diekho60x/image/upload/v1496641140/tattoo6_nqm4cf.jpg', 1, '2017-07-06T21:18:02.967Z', 120, 'tattoo');