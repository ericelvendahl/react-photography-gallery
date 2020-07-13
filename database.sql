CREATE TABLE "gallery_items"
(
    "id" serial PRIMARY KEY,
    "path" varchar(300),
    "description" varchar(1000),
    "likes" int
);

INSERT INTO "gallery_items"
    ("path", "description", "likes")
VALUES
    ('images/EricGuitar.jpg', 'Me playing guitar', 0),

    ('images/Patch1.jpg', 'Peter from Minneapolis Band, Patch', 0),

    ('images/Bouchey1.jpg', 'Minneapolis artist Daniel Heavens', 0),

    ('images/Bouchey2.jpg', 'Bartender at Nick and Eddie art showing', 0),

    ('images/Cindy1.jpg', 'My wife, Cindy, enjoying a seattle road-trip', 0),

    ('images/Cobrafest1.jpg', 'The band Fort Wilson Riot performs', 0),

    ('images/Cobrafest2.jpg', 'Artist Lucas Price at Cobrafest', 0),

    ('images/Cobrafest3.jpg', 'Minneapolis artist Scott Seekins at Cobrafest', 0),

    ('images/Cobrafest4.jpg', 'Minneapolis artist Scott Seekins at Cobrafest', 0),

    ('images/ColorRun1.jpg', 'Runners at the Color Run', 0),

    ('images/Demographics1.jpg', 'Minneapolis band Demographics', 0),

    ('images/Demographics2.jpg', 'Minneapolis band Demographics', 0),

    ('images/DesertVest1.jpg', 'Minneapolis band The Desert Vest', 0),

    ('images/DesertVest2.jpg', 'Minneapolis band The Desert Vest', 0),

    ('images/Halloween1.jpg', 'Minneapolis drummer Justin Korhonen performs with Hot Ashes', 0),

    ('images/Halloween2.jpg', 'Ben and Kari get married', 0),

    ('images/Halloween3.jpg', 'Crew sets up camera rig for Halloween, Alaska music video shoot', 0),

    ('images/Halloween4.jpg', 'Drummer Dave King of the set of Halloween, Alaska music video shoot', 0),

    ('images/Halloween5.jpg', 'Conversation on the set of the Halloween, Alaska video shoot', 0),

    ('images/Halloween6.jpg', 'Director Dan Huiting sets up a shot on the set of the Halloween, Alaska video shoot', 0),

    ('images/Halloween7.jpg', 'Guitarist performs on the set of the Halloween, Alaska video shoot', 0),

    ('images/Kari1.jpg', 'Wedding photo at Jax Cafe', 0),

    ('images/Kari2.jpg', 'Man attending wedding', 0),

    ('images/Lisa1.jpg', 'Client photo for professional headshot', 0),

    ('images/Lisa2.jpg', 'Client photo for professional headshot', 0),

    ('images/MCAD1.jpg', 'Garrett from the band, Holidae', 0),

    ('images/MCAD2.jpg', 'Minneapolis band, Holidae', 0),

    ('images/Patch2.jpg', 'Gus Watkins performs with Patch', 0),

    ('images/Robyn1.jpg', 'Client photo for author Robyn Schindeldecker', 0),

    ('images/Robyn2.jpg', 'Client photo for author Robyn Schindeldecker', 0),

    ('images/Robyn3.jpg', 'Client photo for Robyn Schindeldecker', 0),

    ('images/Sexcat1.jpg', 'Sexcat performs at First Avenue', 0),

    ('images/Sexcat2.jpg', 'Sexcat performs at First Avenue', 0),

    ('images/Sexcat3.jpg', 'Audience member at First Avenue', 0),

    ('images/Sexcat4.jpg', 'Sexcat performs at First Avenue', 0),

    ('images/Speeds1.jpg', 'Ryan Mcnally from Speeds the Name', 0),

    ('images/Speeds2.jpg', 'Drummer for Speeds the Name', 0),

    ('images/DavidGeraldSutton1.jpg', 'David Gerald Sutton performs', 0),

    ('images/Speeds3.jpg', 'Client photo for Speeds the Name', 0),

    ('images/Speeds4.jpg', 'Client photo for Speeds the Name', 0),

    ('images/Usonia1.jpg', 'Client photo for Usonia', 0),

    ('images/ZooAnimal1.jpg', 'Holly Hansen from Zoo Animal in the studio', 0);