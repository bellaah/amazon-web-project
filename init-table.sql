CREATE database amazon;

use amazon;

CREATE TABLE users(
user_id varchar(20),
user_name varchar(20),
password varchar(16),
admin int(2),
PRIMARY KEY(user_id)
);

INSERT INTO users VALUES ('user1', 'user1', '1111', 0);
INSERT INTO users VALUES ('admin1', 'admin1', '1111', 10);
INSERT INTO users VALUES ('superAdmin', 'superAdmin', '1111', 99);

CREATE TABLE main_list(
image varchar(200),
keyword varchar(100),
title varchar(100),
description varchar(500),
tail varchar(100),
link varchar(100),
category varchar(50),
PRIMARY KEY(title)
);

INSERT INTO main_list VALUES ('./public/static_root/Card_A01._CB514650866_.jpg',
'FAST, FREE DELIVERY','Fast, FREE delivery on over 100 million items',
'Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life. Plus, Prime members get FREE One-Day Delivery on tens of millions of items.',
'Explore Prime Delivery','https://www.amazon.com/b?node=15247183011','ship');