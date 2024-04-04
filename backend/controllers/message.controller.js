import Conversation from "../models/conversion.model.js";
import Message from "../models/message.model.js";

export  const sendMessage = async(req, res) => {
    
    try {
        const { message } = req.body;
        const { userId: receiverId } = req.params;
        // this is coming from protectedRoute middleware
       
        const senderId = req.user._id
         console.log(senderId,receiverId,"sender,receiver")
        let conversation = await Conversation.findOne({
            //find a conversation where we have a senderId and receiverId;
            participants:{$all: [senderId,receiverId]}
        })

        if(!conversation){
            conversation =await Conversation.create({
                participants: [senderId,receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
  
        // a small optimisation as they both will run in parellel
        await Promise.all([newMessage.save(),conversation.save()])
  
        res.status(201).json(newMessage)

    } catch (error) {
        console.log("error  in send Message ", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const receiveMessage=async(req,res)=>{
    try{
      const {id:userToChatId} = req.params;
      const senderId = req.user._id;


      const conversation = await Conversation.findOne({
        participants: {$all:[senderId,userToChatId]}
      }).populate("messages")



      res.status(200).json(conversation.messages)
    }
    catch (error) {
        console.log("error  in receive Message ", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}