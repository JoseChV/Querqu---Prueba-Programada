use sql3444498;

--Funciones Create--------------------
DELIMITER $$

CREATE FUNCTION createPropertyType(
	_description TEXT
)
RETURNS INT
BEGIN
  INSERT INTO PropertyType (description) VALUES (_description);
  RETURN 0;
END$$


CREATE FUNCTION createOwner(
  _name TEXT,
  _telephone TEXT,
  _email TEXT,
  _identificationNumber TEXT,
  _address TEXT
)
RETURNS INT
BEGIN
  INSERT INTO Owner(name, telephone, email, identificationNumber, address) VALUES
  (_name, _telephone, _email, _identificationNumber, _address);
  RETURN 0;
END$$


CREATE FUNCTION createProperty(
  _idPropertyType INT,
  _idOwner INT,
  _number TEXT,
  _address TEXT,
  _area FLOAT,
  _constructionArea FLOAT
)
RETURNS INT
BEGIN
  INSERT INTO Property(idPropertyType, idOwner, number, address, area, constructionArea) VALUES
  (_idPropertyType, _idOwner, _number, _address, _area, _constructionArea);
  RETURN 0;
END$$


--Funciones Read--------------------

--Funciones Update--------------------

CREATE FUNCTION updatePropertyType(
  _idPropertyType INT,
	_description TEXT
)
RETURNS INT
BEGIN
  UPDATE PropertyType
  SET description = _description
  WHERE idPropertyType = _idPropertyType;

  RETURN 2;
END$$


CREATE FUNCTION updateOwner(
  _idOwner INT,
  _name TEXT,
  _telephone TEXT,
  _email TEXT,
  _identificationNumber TEXT,
  _address TEXT
)
RETURNS INT
BEGIN
  UPDATE Owner
  SET name = _name, telephone = _telephone, email = _email, 
      identificationNumber = _identificationNumber, address = _address
  WHERE idOwner = _idOwner;

  RETURN 2;
END$$


CREATE FUNCTION updateProperty(
  _idProperty INT,
  _idPropertyType INT,
  _idOwner INT,
  _number TEXT,
  _address TEXT,
  _area FLOAT,
  _constructionArea FLOAT
)
RETURNS INT
BEGIN
  UPDATE Property
  SET idPropertyType = _idPropertyType, idOwner = _idOwner, number = _number,
      address = _address, area = _area, constructionArea = _constructionArea
  WHERE idProperty = _idProperty;

  RETURN 2;
END$$
--Funciones Delete--------------------

CREATE FUNCTION deletePropertyType(
  _idPropertyType INT
)
RETURNS INT
BEGIN
  DELETE FROM PropertyType
  WHERE idPropertyType = _idPropertyType;

  RETURN 3;
END$$


CREATE FUNCTION deleteOwner(
  _idOwner INT
)
RETURNS INT
BEGIN
  DELETE FROM Owner
  WHERE idOwner = _idOwner;

  RETURN 3;
END$$


CREATE FUNCTION deleteProperty(
  _idProperty INT
)
RETURNS INT
BEGIN
  DELETE FROM Property
  WHERE idProperty = _idProperty;

  RETURN 3;
END$$

DELIMITER ;




-----Sección de pruebas--------------
select createPropertyType("12345");
select createOwner("yo","7777","@","2020202","porahi");
select createOwner("yo2","7777","@","2020202","porahi");
select CreateProperty(1, 2, "0", "porahi", 10.1, 1.2);
SELECT updatePropertyType(2, "azucar");  
SELECT updateOwner(2, "alfonzo", "1", "@@", "a", NULL);
SELECT updateProperty(1, 2, 2, "ffff", "porelotroahi", 0, NULL);

select deletePropertyType(1);
select deleteOwner(1);
select deleteProperty(1);
