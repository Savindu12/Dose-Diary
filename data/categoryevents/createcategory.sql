INSERT INTO [dbo].[Category]
(
       [categoryID],
       [categoryName],
       [categoryDes],
       [categoryStatus],
       [adminID]
)
VALUES (
    @categoryID,
    @categoryName,
    @categoryDes,
    @categoryStatus,
    @adminID
)

SELECT SCOPE_IDENTITY() AS categoryID