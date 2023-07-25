SELECT [categoryID],
       [categoryName],
       [categoryDes],
       [categoryStatus],
       [adminID]
FROM [dbo].[Category]
WHERE [categoryID]=@categoryID