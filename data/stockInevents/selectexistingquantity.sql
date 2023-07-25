SELECT [existingQuantity]
FROM [dbo].[Stock]
WHERE [Stock].[StockInID] = @StockInID

-- SELECT S.existingQuantity
-- FROM [dbo].[Stock] S
-- INNER JOIN [dbo].[StockIn] SI On S.medicineName = SI.medicineName
-- WHERE SI.medicineName = @medicineName
