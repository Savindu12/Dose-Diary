INSERT INTO [dbo].[Stock]
(
    [StockID],
    [medicineName],
    [StockInDate],
    [addedQuantity],
    [newStockQuantity],
    [stockInID]
)
VALUES 
(
    @StockID,
    @medicineName,
    @StockInDate,
    @addedQuantity,
    @newStockQuantity,
    @StockInID
)

SELECT SCOPE_IDENTITY() AS StockID