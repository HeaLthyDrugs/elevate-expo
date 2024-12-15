drop table if exists users;

-- Create users table
create table
  users (
    id TEXT PRIMARY KEY,
    username TEXT,
    first_name TEXT,
    email TEXT,
    avatar_url TEXT,
    push_token TEXT
  );


-- Function to get JWT user id
CREATE OR REPLACE FUNCTION requesting_user_id()
RETURNS TEXT AS $$
    SELECT NULLIF(
        current_setting('request.jwt.claims', true)::json->>'sub',
        ''
    )::text;
$$ LANGUAGE SQL STABLE;

-- notifications row level security
alter table notifications enable row level security;