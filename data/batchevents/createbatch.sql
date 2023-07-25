INSERT INTO [dbo].[Batch]
(
    [batchID],
    [batchDes],
    [batchStatus],
    [batchDate],
    [adminID]
)
VALUES (
    @batchID,
    @batchDes,
    @batchStatus,
    @batchDate,
    @adminID
)

SELECT SCOPE_IDENTITY() AS batchID