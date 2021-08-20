CREATE DATABASE miraweb_general;

USE miraweb_general;
drop table actores;
select * from actores;

CREATE TABLE actores(
	id_actores int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(20) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    passw VARCHAR(255) NOT NULL,
    rol VARCHAR(25) NOT NULL
);

CREATE TABLE afiliados(
	id_afiliados int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fecha DATE,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT(10) NOT NULL,
    documento INT NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono INT(50) NOT NULL,
    profesion VARCHAR(50) NOT NULL,
    observaciones TEXT NOT NULL,
    nombre_comite VARCHAR(50) NOT NULL,
    firma_digitalizada VARCHAR(20) NOT NULL,
    registra VARCHAR(50) NOT NULL
);

CREATE TABLE actas(
	id_actas INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usuario_registra VARCHAR(50) NOT NULL, 
    codigo_acta VARCHAR(50) NOT NULL,
    registra VARCHAR(50) NOT NULL,
    fecha_creacion DATE NOT NULL
);

INSERT INTO actores (usuario, nombre, apellido, passw, rol) 
VALUES ("w.admin", "wadmin", "ch.admin", "
$2a$12$W.9EIeUjDLCiWhctyuX1SuZhpuDOXDVFTOiaSjE8CIG1YJdI8FaU6", "Admin");