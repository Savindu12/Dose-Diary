SELECT [batchID],
       [batchDes],
       [batchStatus],
       [batchDate],
       [adminID]
FROM [dbo].[Batch]
WHERE [batchID]=@batchID