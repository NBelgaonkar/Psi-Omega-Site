CREATE TABLE admin_passwords (
    password TEXT PRIMARY KEY
);

INSERT INTO admin_passwords (password) VALUES ('$ADMIN_PASSWORD');

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    event_time TIME NOT NULL,
    event_date DATE NOT NULL,
    location TEXT NOT NULL,
    description TEXT
);

CREATE TABLE rush (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    event_time TIME NOT NULL,
    event_date DATE NOT NULL,
    location TEXT NOT NULL,
    description TEXT,    
    is_invite_only BOOLEAN DEFAULT FALSE
);
