USE TRIPTIDE;
GO

CREATE OR ALTER PROCEDURE getSpecificUserBookings(
    @id VARCHAR (255)
)
AS
BEGIN
    SELECT * FROM bookings WHERE userid = @id 
END