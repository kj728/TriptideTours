import{Router} from 'express'
import { addBooking, deleteBooking, getAllBookings, getSpecificBooking, getSpecificUserBookings, updateBooking } from '../Controllers/bookingController';
import { isAdminCheck, isPermittedCheck, verifyTokens } from '../Middlewares/verifyTokens';

const bookingRouter =Router();
bookingRouter.get("",verifyTokens,isAdminCheck,getAllBookings)
 bookingRouter.get("/user/:id",verifyTokens,getSpecificUserBookings)
bookingRouter.post("",addBooking)
bookingRouter.get("/:id",verifyTokens,isPermittedCheck,getSpecificBooking)
bookingRouter.patch("/:id",verifyTokens,isPermittedCheck,updateBooking)
bookingRouter.delete("/:id",verifyTokens,isPermittedCheck,deleteBooking)



export default bookingRouter;