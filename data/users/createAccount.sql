INSERT INTO [dbo].[createaccount]
    (
        [Firstname],
        [Lastname],
        [Username],
        [Email],
        [Password],
        [Confirmpassword]
    )
VALUES
    (
        @Firstname,
        @Lastname,
        @Username,
        @Email,
        @Password,
        @Confirmpassword
    )
