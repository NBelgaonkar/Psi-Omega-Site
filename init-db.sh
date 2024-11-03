#!/bin/bash
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE TABLE IF NOT EXISTS admin_credentials (
    id SERIAL PRIMARY KEY,
    password_hash VARCHAR(255) NOT NULL
  );
  
  DO \$\$
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM admin_credentials WHERE id = 1) THEN
      INSERT INTO admin_credentials (password_hash) VALUES ('$ADMIN_PASSWORD_HASH');
    END IF;
  END
  \$\$;
EOSQL
