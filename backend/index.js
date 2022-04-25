
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const connection = require('./db');
const imagesRoutes = require("./routes/images")
// database connection
connection()


//middlewares

app.use(express.json());
app.use(cors())


// let conn = mongoose.createConnection(mongoURI);
// let gfs

// conn.once("open", () => {
//   //initialize our stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("imageUpload");
//   console.log("connection successful")
// });

// let storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       const fileInfo = {
//         filename: file.originalname,
//         bucketName: "imageUpload",
//       };
//       resolve(fileInfo);
//     });
//   },
// });

// const upload = multer({ storage });
// app.use("/", routes);

// app.get("/files", (req, res) => {
//   gfs.files.find().toArray((err, files) => {
//     //check if files exist
//     if (!files || files.length == 0) {
//       return res.status(404).json({
//         err: "No files exist",
//       });
//     }

//     // files exist
//     return res.json();
//   });
// });

// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.json({ file: req.file });
// })

// app.get('/image/:filename', (req, res) => {
//     console.log(req.params)
//     gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        
//         //check if files exist
//         if (!file || file.length == 0) {

//             return res.status(404).json({
//                 err: "No files exist"
//             })
//         }
//         //check if image
//         if (file.contentType === 'image/jpeg' || file.contentType === "img/png") {
//             //read output to browser
//             const readStream = gfs.createReadStream(file.filename)
//             readStream.pipe(res)
//         } else {
//             res.status(404).json({
//                 err: "Not an image"
//             })
//         }
//     })
// })


//Routes

app.use("/api", imagesRoutes);




const port = process.env.PORT || 4200;
app.listen(port, () => console.log(`Server running on port ${port}`));



