-- drop database parents and then create database parents, then do 'nodemon server.js', then past this seed file into the database through mysql workbench. You have to drop the database to reset the users table. 
-- You need to reset the users table so each post's userId will point to the right person. if you have some other user at id:1, then the first three posts will point to that user and not Mitchel Underwood as listed below


INSERT INTO Users
    (first, last, email, password,createdAt,updatedAt)
VALUES
    ("Mitchell", "Underwood", 'mitchell@underwood.com', "$2a$10$gnzBrsgGZ8vqgySkqGDSbeNr.zYcN/.hzPdZZTH79o.xLcB9gRgTW", '2020-08-25 20:11:05', '2020-08-25 20:11:05'),
    ("Paul", "Sloderbeck", "paul@sloderbeck.com", "$2a$10$gnzBrsgGZ8vqgySkqGDSbeNr.zYcN/.hzPdZZTH79o.xLcB9gRgTW", '2020-08-25 20:11:05', '2020-08-25 20:11:05'),
    ("Travis", "Hill", "travis@hill.com", "$2a$10$YuPP/nThiVFv.6ckubpS4.nKGuMcBWwtvtseCSBXfOOtdJcbtCi.a", '2020-08-25 20:11:05', '2020-08-25 20:11:05'),
    ("Sean", "McGinnis", "sean@McGinnis.com", "$2a$10$IUeMaGZtpn1vfN5lHMCtweznmO7fHCfwnZmANMGMDC5lSjy6A3V.K", '2020-08-25 20:11:05', '2020-08-25 20:11:05'),
    ("Karen", "McCarg", "karen@mccarg.com", "$2a$10$Vz/LnpqiecssQi/rdJba0.EKTrW1coAEMgLVfdbNW1tJsLk2JQujG", '2020-08-25 20:11:05', '2020-08-25 20:11:05');

INSERT INTO Posts
    (title,body,link,linkframe,category,district,school,grade,UserId,createdAt, updatedAt)
VALUES
    ("My First Post", "This is my first post, I'm just trying to see what this sight is about", NULL, NULL, "General", "Wake", NULL, NULL, 1, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("My kids suck at Math.", "My son is terrible at long division, does anyone have a link for that? He is in 4th Grade", NULL, NULL, "Question", "Wake", "Baileywick Elementary", "5", 1, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("Is Canvas is down again?", "My son's canvas page isn't working, is anyone else experiencing that", NULL, NULL, "Issue", "Wake", "Millbrook High", "10", 1, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("Panopto has crashed", "Stupid panopoto keeps starting and stopping on my daughter. What's going on?", NULL, NULL, "Issue", "Wake", "West Millbrook Middle", "6", 2, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("The school board just posted this", "So the wake school board just posted this article about themselves.", "https://en.wikipedia.org/wiki/Board_of_education", NULL, "Announcement", "Wake", NULL, NULL, 2, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("Help with English Lit Grade 5", "Does anyone have any links for english list grade 5 stuff", NULL, NULL, "Question", "Wake", NULL, "5", 2, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("Is the whole county down", "Is it just me or is all of wake county down", NULL, NULL, "Issue", "Wake", NULL, NULL, 3, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("In Response to Karen's question", "Here is a great resource of organic child lunches.", "https://www.youtube.com/watch?v=2RGAtU9iIZY", NULL, "Resource", NULL, NULL, NULL, 3, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("How do final exams work now?", "What the deal with EOG's this year", NULL, NULL, "Question", "Wake", NULL, "4", 3, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("Are scantrons still a thing", "So are we expected to get scantrons for our kids tests or something?", NULL, NULL, "Question", "Wake", "Wakefield High", "9", 4, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("A great Math resource", "a greate youtube video detailing math", "https://www.youtube.com/watch?v=Kp2bYWRQylk", NULL, "Resource", NULL, NULL, NULL, 4, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("A great lit resource", "A great youtube video explaining literature", "https://www.youtube.com/watch?v=xz9rfDm1Wr4", NULL, "Resource", NULL, NULL, NULL, 4, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("I'm starting to loose it", "My kids are starting to drive me crazy and I can't cope. Tell me someone out there is also going through this", NULL, NULL, "Question", NULL, NULL, "K", 5, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("Homeschooling Resource", "Here is a great resource for homeschooling", "https://www.youtube.com/watch?v=9I3dRbfZTlM", NULL, "Resource", NULL, NULL, NULL, 5, '2020-08-22 18:23:03', '2020-08-22 18:23:03'),
    ("Some parents are having a field day", "So some parents are putting together a dodgeball game at Millbrook park", NULL, NULL, "Announcement", "Wake", NULL, "7", 5, '2020-08-22 18:23:03', '2020-08-22 18:23:03');
