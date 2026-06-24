CREATE TABLE IF NOT EXISTS greetings (
    id SERIAL PRIMARY KEY,
    word TEXT NOT NULL
);

INSERT INTO greetings (word) VALUES ('World');
