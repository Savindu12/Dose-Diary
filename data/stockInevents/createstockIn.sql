INSERT INTO [dbo].[StockIn]
(
    [StockInDate],
    [Batchname],
    [categoryName],
    [subCategoryName],
    [medicineName],
    [existingQuantity],
    [addedQuantity],
    [notes],
    [StockInID]
)
VALUES (
    @StockInDate,
    @Batchname,
    @categoryName,
    @subCategoryName,
    @medicineName,
    @existingQuantity,
    @addedQuantity,
    @notes,
    @StockInID
)


SELECT SCOPE_IDENTITY() AS StockInID