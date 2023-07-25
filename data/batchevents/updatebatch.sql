UPDATE [dbo].[Batch]
SET [batchID]=@batchID,
    [batchDes]=@batchDes,
    [status]=@status,
    [batchDate]=@batchDate,
    [adminID]=@adminID
WHERE [batchID]=@batchID

SELECT [batchID],
       [batchDes],
       [status],
       [batchDate]=@batchDate,
       [adminID]=@adminID
  FROM [dbo].[Batch]
  WHERE [batchID]=@batchID