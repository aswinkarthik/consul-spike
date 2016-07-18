CREATE TABLE availability (ticket_count INTEGER DEFAULT 0);

INSERT INTO availability VALUES(20);

CREATE TABLE payments (id SERIAL PRIMARY KEY, paid_date DATE DEFAULT now());