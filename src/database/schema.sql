CREATE DATABASE heroi;

/c heroi;

CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    id_editor INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    poder VARCHAR(255) NOT NULL
);

CREATE TABLE editores (
    id_heroi INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    sexo VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    FOREIGN KEY (id_heroi) REFERENCES herois(id)
);

INSERT INTO herois (id_editor, nome, poder) VALUES
(1, 'Superman', 'Super força'),
(2, 'Batman', 'Inteligência'),
(3, 'Flash', 'Velocidade'),
(4, 'Aquaman', 'Comunicação com animais marinhos'),
(5, 'Mulher Maravilha', 'Força sobre-humana');

INSERT INTO editores (id_heroi, nome, sexo, idade) VALUES
(1, 'Clark Kent', 'Masculino', 35),
(2, 'Bruce Wayne', 'Masculino', 40),
(3, 'Barry Allen', 'Masculino', 30),
(4, 'Arthur Curry', 'Masculino', 32),
(5, 'Diana Prince', 'Feminino', 28);