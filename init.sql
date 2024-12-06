CREATE TABLE admin_passwords (
    password TEXT PRIMARY KEY
);

INSERT INTO admin_passwords (password) VALUES ('$ADMIN_PASSWORD');
