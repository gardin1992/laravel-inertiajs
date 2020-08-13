CREATE TABLE pet (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL, 
    owner VARCHAR(20),
    species VARCHAR(20) NOT NULL, 
    sex CHAR(1), 
    birth DATE NOT NULL, 
    death DATE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO pet (name, owner, species, sex, birth, death) 
VALUES
(`Arlequina`, `Joao Gardin`, `Gato`, `F`, `20-03-2016T00:00`, null),
(`Coringa`, `Joao Gardin`, `Gato`, `M`, `20-03-2019T00:00`, null),
(`Problema`, `Joao Gardin`, `Gato`, `M`, `20-03-2020T00:00`, null)
;
