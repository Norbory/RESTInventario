    CREATE DATABASE IF NOT EXISTS geodigital;

    USE geodigital;

    CREATE TABLE projects (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        primary key (id)
    );

    DESCRIBE projects;

     CREATE TABLE storage (
        id_project INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(500) DEFAULT NULL,
        location VARCHAR(500) DEFAULT NULL,
        stock INT NOT NULL,
        id INT NOT NULL AUTO_INCREMENT,
        primary key (id)
    );

    DESCRIBE storage;

    INSERT INTO projects VALUES
     (1,"Atacocha"),
     (2,"El Porvenir"),
     (3,"Selene"),
     (4,"Inmaculada");
