SELECT
  SUM(CASE WHEN batchStatus = 'Active' THEN 1 ELSE 0 END) AS ActiveBatches,
  SUM(CASE WHEN batchStatus = 'Frozen' THEN 1 ELSE 0 END) AS FrozenBatches
FROM [dbo].[Batch];