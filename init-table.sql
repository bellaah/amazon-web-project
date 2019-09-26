CREATE database amazon;

use amazon;

CREATE TABLE users(
    user_id varchar(20),
    user_name varchar(20),
    password varchar(16),
    admin int(2),
    PRIMARY KEY(user_id)
);

INSERT INTO users VALUES ('user1', 'user1', 'MydaiqSOqRi9U6kYGql18Vqw0GRTmPWRigBtCGdcHLJ9XGRdvQhO7lbmdeJbpAGfLs6jfKnimVtJ/LEsCWoDLg==', 0);
INSERT INTO users VALUES ('admin1', 'admin1', 'MydaiqSOqRi9U6kYGql18Vqw0GRTmPWRigBtCGdcHLJ9XGRdvQhO7lbmdeJbpAGfLs6jfKnimVtJ/LEsCWoDLg==', 10);
INSERT INTO users VALUES ('superAdmin', 'superAdmin', 'MydaiqSOqRi9U6kYGql18Vqw0GRTmPWRigBtCGdcHLJ9XGRdvQhO7lbmdeJbpAGfLs6jfKnimVtJ/LEsCWoDLg==', 99);

CREATE TABLE main_list(
    seq int(10) NOT NULL AUTO_INCREMENT,
    image varchar(500),
    keyword varchar(300),
    title varchar(300),
    description varchar(500),
    tail varchar(300),
    link varchar(500),
    category varchar(100),
    PRIMARY KEY(seq)
);

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_A01._CB514650866_.jpg",
"FAST, FREE DELIVERY","Fast, FREE delivery on over 100 million items",
"Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life. Plus, Prime members get FREE One-Day Delivery on tens of millions of items.","Explore Prime Delivery",
"https://www.amazon.com/b?node=15247183011","ship");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_A04._CB494909365_.jpg",
"PRIME NOW","Ultrafast delivery on thousands of items",
"Prime Now offers household items and essentials you need everyday plus the best of Amazon, delivered to your doorstep. Choose 2-hour delivery or 1-hour delivery in select cities.","Explore Prime Now",
"https://primenow.amazon.com/onboard?sourceUrl=%2F","ship");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_B02._CB513839286_.jpg",
"TWITCH PRIME","Free Games & Loot with Twitch Prime",
"Gamers can get free games, in-game items, a free Twitch channel subscription every month and more with Twitch Prime.","Explore Twitch Prime",
"https://twitch.amazon.com/prime","stream");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_B03._CB513839286_.jpg",
"PRIME MUSIC","Millions of songs for every moment",
"As a Prime member, you can stream over 2 million songs ad free, listen on any Echo device, and take your music anywhere with offline listening.","Explore Prime Music",
"https://www.amazon.com/gp/dmusic/promotions/PrimeMusic?ref=hawkfire_prime_detail_page_benefit_desc","stream");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_B04_AVD12272_PrimeContentUpdate_1280x400_en_US._CB474157036_.jpg",
"AMAZON ORIGINALS","Enjoy Amazon Original series and more",
"Watch award-winning Amazon Originals like The Marvelous Mrs. Maisel, as well as exclusive series available only with Prime, including Goliath, Sneaky Pete, and The Grand Tour.","Explore Amazon Originals",
"https://www.amazon.com/gp/video/storefront/ref=dvm_us_aq_np_dhb_be_optorigt1?ie=UTF8&merchId=originals1","stream");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_B05._CB514650828_.jpg",
"AUDIBLE CHANNELS","Original audio programs for life on the go",
"Audible Channels are free with your Prime membership. Enjoy original audio series and playlists handcrafted for every interest. Just download the Audible app and start listening.","Explore Audible Channels",
"https://www.audible.com/mt/getchannels","stream");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_C06._CB495022579_.jpg",
"PRIME AT WHOLE FOODS MARKET","Our healthiest benefit yet",
"Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)","Explore Prime at Whole Foods",
"https://www.amazon.com/wholefoods","shop");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_C01_revised._CB502880131_.jpg",
"ALEXA VOICE SHOPPING","The simplest way to shop. Just ask Alexa.",
"With Alexa, shopping for essentials and reordering your favorite items from Amazon has never been easier.","Learn more about Alexa and Prime",
"https://www.amazon.com/alexa-voice-shopping/b?ie=UTF8&node=14552177011","shop");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_C03._CB511882458_.jpg",
"JUST WITH PRIME","Exclusive brands and deals available only to Prime members",
"As a Prime member enjoy early access to deals, Prime exclusive brands, and savings.","Shop Prime Member Exclusives",
"https://www.amazon.com/b?ie=UTF8&node=16205654011","shop");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_C04._CB514650828_.jpg",
"AMAZON FAMILY","Save on supplies for the family",
"Prime members save 20% off both diapers and baby food when they have 5 or more subscriptions arriving","Explore Family Supplies",
"https://www.amazon.com/gp/family/signup","shop");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_D01._CB514706473_.jpg",
"PRIME READING","Prime members read free",
"As a Prime member, you can now read as much as you like from over a thousand top Kindle books, magazines, short works, books with Audible narration, comics, children's books and more—all at no additional cost.","Explore Prime Reading",
"https://www.amazon.com/kindle-dbs/fd/prime-pr","read");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_E03._CB513839888_.jpg",
"5% BACK","Earn more with Prime Rewards",
"Eligible Prime members can earn 5% back at Amazon.com using the Amazon Prime Rewards Visa Card or the Amazon Prime Store card. All Prime members earn 2% rewards with Amazon Prime Reload.","Learn more about Prime Rewards",
"https://www.amazon.com/b?node=16914437011&ref=acqNPrewards","more");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_D02._CB513839283_.jpg",
"AMAZON FIRST READS","Read next month's new releases today",
"Each month, Prime members can download one editors' pick for free--before the official publication date. Downloaded titles are yours to keep.","Learn more about Amazon First Reads",
"https://www.amazon.com/kindlefirst","read");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_E01._CB513839282_.jpg",
"AMAZON PHOTOS","Unlimited, free photo storage",
"Back up and share your photos with unlimited photo storage. Add your photos to the free app to see them on all your devices.","Explore Amazon Photos",
"https://www.amazon.com/b?node=13234696011","more");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_A03._CB514650829_.jpg",
"RELEASE DAY DELIVERY","Skip the lines and get it on release day",
"No more waiting in line! Choose Free Release-Date Delivery at checkout on qualified items, and your package will be delivered on the release day by 7pm.","Explore Release-Date Delivery",
"https://www.amazon.com/b?node=16067347011","ship");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_B01._CB457663232_.jpg",
"PRIME VIDEO","Watch movies, TV, live events, and more",
"As a Prime member, you can watch exclusive Amazon Originals and thousands of popular movies and TV shows—all at no extra cost. Watch at home or on the go with practically any device.","Explore Prime Video",
"https://www.amazon.com/b/ref=dvm_us_aq_np_dhb_be_optpvt1?node=2858778011","stream");

INSERT INTO main_list (image,keyword,title,description,tail,link,category) VALUES ("/static_root/Card_A02._CB514650866_.jpg",
"SAME-DAY DELIVERY","FREE Same-Day Delivery",
"Prime members get FREE Same-Day Delivery on over three million items with qualifying orders.","Explore Same-Day Delivery",
"https://www.amazon.com/b?node=8729023011","ship");
