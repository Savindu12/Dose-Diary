INSERT INTO [dbo].[Medicines]
(
    [medicineID],
    [medicineName],
    [productionDate],
    [expiryDate],
    [reorderLevel],
    [price],
    [categoryName]
)
VALUES (
    @medicineID,
    @medicineName,
    @productionDate,
    @expiryDate,
    @reorderLevel,
    @price,
    @categoryName
)

SELECT SCOPE_IDENTITY() AS medicineID