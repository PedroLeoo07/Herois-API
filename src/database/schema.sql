CREATE DATABASE herois;

\c herois;

CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    poder VARCHAR(100) NOT NULL,
    photo TEXT
);

CREATE TABLE editora (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nascimento DATE,
    nacionalidade VARCHAR(100) NOT NULL,
    hero_id INTEGER REFERENCES heroes(id) ON DELETE CASCADE
);

INSERT INTO heroes (name, poder, photo) VALUES 
    ('Homem Aranha', 'Teia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESdem_zNbPgpWUYFqFQL2eox6zzkoAS-Lig&s'),
    ('Capitão América', 'Escudo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoZvI5g_FKV49A_sqMAQq9B9_6JRBiv3WAg&s'),
    ('Deadpool', 'Arma', 'https://www.deviante.com.br/wp-content/uploads/2016/02/deadpool-001.jpg'),
    ('Flash', 'Força de Aceleração', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Gi98-KkqvY1GrCV6PBHFXLEvpQt-CUaXog&s'),
    ('Batman', 'Inteligência', 'https://cdn1.epicgames.com/undefined/offer/batman-arkham-knight_promo-2048x1152-ed2be22b3f24f446534b90b122ed560d.jpg'),
    ('Aquaman', 'Controle sobre a água', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrxUrmVdvvsIqUMp24u9EwlhBm4YqtpvStw&s');

INSERT INTO editora (name, nascimento, nacionalidade, hero_id) VALUES 
    ('Marvel', '1939-01-01', 'EUA', 1),
    ('Marvel', '1939-01-01', 'EUA', 2),
    ('Marvel', '1991-02-14', 'EUA', 3),
    ('DC Comics', '1934-01-01', 'EUA', 4),
    ('DC Comics', '1939-01-01', 'EUA', 5),
    ('DC Comics', '1941-01-01', 'EUA', 6);