
UPDATE [dbo].[Category]
SET [categoryName] = @categoryName,
    [categoryDes] = @categoryDes,
    [categoryStatus] = @categoryStatus
WHERE [categoryID] = @categoryID

SELECT [categoryID],
       [categoryName],
       [categoryDes],
       [categoryStatus]
  FROM [dbo].[Category]
  WHERE [categoryID]=@categoryID