import { serve } from "inngest/next";
<<<<<<< HEAD
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inngest";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    
    syncUserCreation,
    syncUserUpdate,
    syncUserDeletion
=======
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
     syncUserCreation,
     syncUserUpdation,
     syncUserDeletion
>>>>>>> c4ce1f9 (Second time commit)
  ],
});
