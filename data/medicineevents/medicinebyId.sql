SELECT    [medicineID],
          [medicineName],
          [productionDate],
          [expiryDate],
          [reorderLevel],
          [price],
          [categoryName]
FROM [dbo].[Medicines]
WHERE [medicineID]=@medicineID