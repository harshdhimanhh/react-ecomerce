// import express from 'express';
// import cors from 'cors';
// import dotenv from "dotenv";
// import connectDB from './config/db.js';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// // connectDB();

// dotenv.config();

// const start = async () => {
//     try {
//         await connectDB();

//         app.listen(5001, () => {
//             console.log("server running on 5001");
//         });

//     } catch (error) {
//         console.log(error);
//     }
// };

// start();

// // app.listen(5001, () => {
// //     console.log('server is running on port 5001');
// // })


import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const start = async () => {
  try {

    await connectDB();

    app.listen(5001, () => {
      console.log("server running on 5001");
    });

  } catch (error) {
    console.log(error);
  }
};

start();