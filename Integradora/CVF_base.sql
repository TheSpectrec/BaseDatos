CREATE DATABASE IF NOT EXISTS CVF_Integradora;
USE CVF_Integradora;

-- Tabla roles
CREATE TABLE roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL
);

-- Tabla houses
CREATE TABLE houses (
    house_id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(255),
    photo VARCHAR(45),
    address JSON
);

-- Tabla users
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL,
    name VARCHAR(45) NOT NULL,
    paternal VARCHAR(45),
    maternal VARCHAR(45),
    phone INT,
    birthday DATE,
    house_id INT,
    FOREIGN KEY (house_id) REFERENCES houses(house_id) ON DELETE SET NULL
);

-- Tabla visit_types
CREATE TABLE visit_types (
    visit_type_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL
);

-- Tabla visits
CREATE TABLE visits (
    visit_id INT PRIMARY KEY AUTO_INCREMENT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    num_person INT,
    description VARCHAR(255),
    password VARCHAR(45),
    person_name VARCHAR(45),
    observation VARCHAR(255),
    house_id INT,
    visit_type_id INT,
    FOREIGN KEY (house_id) REFERENCES houses(house_id) ON DELETE CASCADE,
    FOREIGN KEY (visit_type_id) REFERENCES visit_types(visit_type_id) ON DELETE SET NULL
);

-- Tabla evidencias
CREATE TABLE evidencias (
    idevidencias INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45),
    image VARCHAR(45),
    visits_visit_id INT,
    FOREIGN KEY (visits_visit_id) REFERENCES visits(visit_id) ON DELETE CASCADE
);

-- Tabla authentication
CREATE TABLE authentication (
    user_id INT,
    role_id INT,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE CASCADE
);


INSERT INTO roles (name) VALUES ('Admin'), ('Residente'), ('Guardia');
INSERT INTO houses (description, photo, address) VALUES
('Casa principal', 'house1.jpg', '{"street": "Calle 1", "city": "Ciudad A"}'),
('Apartamento', 'house2.jpg', '{"street": "Avenida 5", "city": "Ciudad B"}');
INSERT INTO users (username, password, name, paternal, maternal, phone, birthday) VALUES
('Pablo', SHA2('password123', 256), 'Pablo', 'Perez', 'Fuentes', 123456789, '1990-05-10');

INSERT INTO authentication (user_id, role_id) VALUES
(1, 1);

INSERT INTO houses (description, photo, address) VALUES
('Casa principal', 'house1.jpg', '{"street": "Calle 1", "city": "Ciudad A"}'),
('Apartamento', 'house2.jpg', '{"street": "Avenida 5", "city": "Ciudad B"}');

-- Inserciones para la tabla visit_types
INSERT INTO visit_types (name) VALUES ('Familiar'), ('Tecnica');

-- Inserciones para la tabla visits
INSERT INTO visits (date, num_person, description, password, person_name, observation, house_id, visit_type_id) VALUES
('2024-02-25 14:00:00', 2, 'Visita de familiares', 'visit123', 'Jane Doe', 'Todo en orden', 1, 1),
('2024-02-26 16:30:00', 1, 'Visita de negocios', 'business456', 'Robert Brown', 'Reunión importante', 2, 2);

-- Inserciones para la tabla evidencias
INSERT INTO evidencias (name, image, visits_visit_id) VALUES
('Foto de entrada', 'entry.jpg', 1),
('Documento de visita', 'doc.pdf', 1);

SELECT username, password FROM users LIMIT 5;
