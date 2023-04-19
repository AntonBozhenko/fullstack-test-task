CREATE DATABASE test_task;

\c test_task;

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    groupid INTEGER REFERENCES groups(id) ON DELETE CASCADE
);

INSERT INTO groups (name, country) 
VALUES 
('Wildways', 'Russia'),
('While She Sleeps', 'USA'),
('Bring Me the Horizon', 'UK'),
('Architects', 'UK'),
('Suicide Silence', 'USA'),
('AMATORY', 'Russia'),
('Shokran', 'Russia'),
('Jinjer', 'Ukraine'),
('Slaughter to Prevail', 'Russia'),
('Lorna Shore', 'USA'),
('Shadow of Intent', 'USA'),
('Invertor', 'Russia'),
('Whitechapel', 'USA'),
('Таймсквер', 'Russia'),
('I Prevail', 'USA'),
('KICKROX', 'Russia'),
('Infant Annihilator', 'UK'),
('Dead by April', 'Sweden'),
('Abbys, Watching Me', 'Czech'),
('As I Lay Dying', 'USA'),
('Asking Alexandria', 'UK'),
('Spiritbox', 'Canada'),
('Babymetal', 'Japan'),
('Ice Nine Kills', 'USA'),
('Electric Callboy', 'Germany'),
('Slipknot', 'USA'),
('Sarah Where Is My Tea', 'Russia'),
('Wage War', 'USA'),
('Trivium', 'USA'),
('Children Of Bodom', 'Finland'),
('Static-X', 'USA'),
('Korn', 'USA'),
('Palisades', 'USA'),
('Parkway Drive', 'Australia'),
('Escape The Fate', 'USA'),
('Falling in Reverse', 'USA'),
('Gojira', 'France'),
('Ауткаст', 'Russia'),
('Motionless in White', 'USA'),
('Chelsea Grin', 'USA');

INSERT INTO albums (title, year, groupid) 
VALUES 
('Into the Wild', 2016, 1),
('Day X', 2018, 1),
('Нью Скул', 2019, 1),
('Anna', 2020, 1),
('Симптомы', 2023, 1),
('This is the Six', 2012, 2),
('Brainwashed', 2015, 2),
('You Are We', 2017, 2),
('So What?', 2019, 2),
('Sleeps Society', 2012, 2);