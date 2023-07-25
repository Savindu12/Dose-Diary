SELECT [StockInDate],
       [Batchname],
       [categoryName],
       [subCategoryName],
       [medicineName],
       [existingQuantity],
       [addedQuantity],
       [notes],
       [StockInID]
FROM [dbo].[StockIn]

-- CREATE PROCEDURE GetStockInItems
-- AS
-- BEGIN
--     SELECT [StockInDate], 
--            [Batchname],
--            [categoryName],
--            [subCategoryName],
--            [medicineName],
--            [existingQuantity],
--            [addedQuantity],
--            [notes],
--            [StockInID]
--     FROM [dbo].[StockIn]
-- END
