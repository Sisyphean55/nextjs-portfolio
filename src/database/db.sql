CREATE TABLE IF NOT EXISTS articles(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    img_url VARCHAR(100) NOT NULL,
    body TEXT NOT NULL,
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

INSERT INTO articles(title,img_url,body) VALUES ('Test', 'japan-default.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui magnam laborum fuga ab reprehenderit eos iste id at saepe? Architecto quos rerum repudiandae quis error illum est excepturi quam?');

INSERT INTO articles(title,img_url,body) VALUES ('Test', 'japan-default.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui magnam laborum fuga ab reprehenderit eos iste id at saepe? Architecto quos rerum repudiandae quis error illum est excepturi quam?');

INSERT INTO articles(title,img_url,body) VALUES ('Test', 'japan-default.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui magnam laborum fuga ab reprehenderit eos iste id at saepe? Architecto quos rerum repudiandae quis error illum est excepturi quam?');