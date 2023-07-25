INSERT INTO [dbo].[Subcategory]
(
    [subCategoryID],
    [subCategoryName],
    [categoryName],
    [subCategoryDes],
    [subCategoryStatus]
)
VALUES (
    @subCategoryID,
    @subCategoryName,
    @categoryName,
    @subCategoryDes,
    @subCategoryStatus
)

SELECT SCOPE_IDENTITY() AS subCategoryID