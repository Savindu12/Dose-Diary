SELECT [medicineName],
       [reorderDate],
       [currentQuantity]
FROM [dbo].[Reorder]
WHERE [reorderAction] = 'immediate'
