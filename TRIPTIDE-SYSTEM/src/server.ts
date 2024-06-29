import express from 'express';
import authRouter from './Routes/authRoutes';
import hotelRouter from './Routes/hotelRoutes';
import tourRouter from './Routes/tourRoutes';
import bookingRouter from './Routes/bookingRoutes';
import cors from 'cors'

const app = express();

const port =1000;

//middlewares
app.use(cors())
app.use(express.json())

app.use("/auth",authRouter)
app.use("/hotels",hotelRouter);
app.use("/tours",tourRouter);
app.use("/bookings",bookingRouter);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});