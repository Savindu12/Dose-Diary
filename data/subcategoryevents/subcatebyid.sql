SELECT [subCategoryID],
       [subCategoryName],
       [subCategoryDes],
       [subCategoryStatus],
       [categoryID]
FROM [dbo].[Subcategory]
WHERE [subCategoryID]=@subCategoryID