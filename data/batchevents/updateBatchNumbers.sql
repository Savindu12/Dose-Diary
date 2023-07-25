DECLARE @deletedBatchID INT = [BatchID];

UPDATE [dbo].[Batch]
SET [batchID] = [batchID] - 1
WHERE [batchID] > @deletedBatchID;