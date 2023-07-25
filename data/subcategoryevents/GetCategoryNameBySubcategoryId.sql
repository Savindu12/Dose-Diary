
SELECT C.categoryName
FROM [dbo].[Category] C
INNER JOIN [dbo].[Subcategory] SC ON C.categoryID = SC.categoryID
WHERE SC.subCategoryID = @subCategoryID

