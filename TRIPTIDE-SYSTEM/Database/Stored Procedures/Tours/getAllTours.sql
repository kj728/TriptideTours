USE TRIPTIDE;
GO

CREATE OR ALTER PROCEDURE getAllTours
AS
BEGIN
    SELECT* FROM tours WHERE isDeleted !=1
END