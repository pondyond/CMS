INSERT [dbo].[P_频道] ([Name], [Url], [Description], [StyleConfigurePath], [IsDefault], [OrderId], [CreateDate], [IsDeleted]) 
VALUES (N'channel', N'channel', N'默认频道', N'', 1, 1, CAST(0x0000A13900000000 AS DateTime), 0)

declare @ChannelId uniqueidentifier
set @ChannelId=(select top 1 ChannelId from [P_频道])
INSERT [dbo].[P_分组] ([Name], [Url], [Description], [OrderId], [CreateDate], [IsDeleted], [ChannelId])
 VALUES (N'group', N'group', N'默认分组', 1, CAST(0x0000A13900000000 AS DateTime), 0, @ChannelId)

declare @GroupId uniqueidentifier
set @GroupId=(select top 1 GroupId from [P_分组])
INSERT [dbo].[P_分类] ([Name], [Url], [Description], [OrderId], [IsDeleted], [CreateDate], [Group_GroupId], [BannerUrl]) 
VALUES (N'默认', N'default', N'', 1, 0, CAST(0x0000A13900000000 AS DateTime), @GroupId, '/Content/Image/banner.png')

INSERT [dbo].[C_用户] ([UserName], [LoginName], [Password], [Email], [IsDeleted], [CreateDate]) 
VALUES ( N'管理员', N'admin', N'123', N'kiahyang@outlook.com', 0, CAST(0x0000A13900000000 AS DateTime))

declare @UserId uniqueidentifier
set @UserId=(select top 1 UserId from [C_用户])
INSERT [dbo].[P_文章] ([Url], [Title], [Description], [GradePoint], [PostStatus], [CommentStatus], [Password], [PubDate], [PubIp], [PubAddress], [EditDate], [EditIp], [EditAddress], [PageCount], [ViewCount], [ReplyCount], [CreateDate], [PubAdminId], [EditAdminId], [GroupId], [QrCode_QrCodeId], [Source_SourceId], [Thumbnail_ThumbnailId]) 
VALUES (N'test', N'测试', N'<p>这是第一篇文章.</p>', 5, 1, 1, NULL, CAST(0x0000A13900000000 AS DateTime), N'127.0.0.1', N'', NULL, NULL, NULL, 1, 1, 0, CAST(0x0000A13900000000 AS DateTime), @UserId, NULL, @GroupId, NULL, NULL, NULL)

declare @PostId uniqueidentifier
set @PostId=(select top 1 PostId from [P_文章])
declare @CategoryId uniqueidentifier
set @CategoryId=(select top 1 CategoryId from [P_分类])
INSERT [dbo].[P_文章_分类] ([Post_PostId], [Category_CategoryId]) 
VALUES (@PostId, @CategoryId)

INSERT [dbo].[P_分页] ([Title], [Content], [OrderId], [Post_PostId]) 
VALUES (N'', N'<p>这是第一篇文章.</p>
', 1, @PostId)

INSERT [dbo].[B_留言] ([Content], [Author], [Ip], [Address], [CreateDate], [IsDeleted]) 
VALUES (N'test.', N'user', N'127.0.0.1', N'', CAST(0x0000A13900000000 AS DateTime), 0)

