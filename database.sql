--table--
CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	url VARCHAR(100),
	comments VARCHAR(255),
	like_count INT DEFAULT 0,
	view_count INT DEFAULT 0
);
--images--
INSERT INTO images (url, comments) VALUES ('images/bwca.jpg', 'Photo from the BWCA. Reminds me of spending time with my family.'),
('images/mpls.jpg', 'Taken from the Stone Arch Bridge. Reminds me how much Minnesota has become a part of my life.'),
('images/friends.jpg', 'Reminds me of good times with friends.'),
('images/halsey.jpg', 'With all good memories, comes a good dog. This is Halsey.'),
('images/lincoln.jpg', 'Photo of my ship moored offshore outside of Antalya, Turkey. Reminds me of my time in the service.'),
('images/seattle.jpg', 'Taken from the Puget Sound. My second favorite city. I spent a lot of my adult life in the Pacific Northwest so this picture really feels like home.');