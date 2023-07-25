UPDATE [dbo].[Medicines]
SET  [medicineID]=@medicineID,
    [medicineName]=@medicineName,
    [productionDate]=@productionDate,
    [expiryDate]=@expiryDate,
    [reorderLevel]=@reorderLevel,
    [price]=@price,
    [categoryName]=@categoryName
WHERE [medicineID]=@medicineID

SELECT    [medicineID],
          [medicineName],
          [productionDate],
          [expiryDate],
          [reorderLevel],
          [price],
          [categoryName]
FROM [dbo].[Medicines]
WHERE [medicineID]=@medicineID

