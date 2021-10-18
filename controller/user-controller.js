import User from "../model/userSchema.js";


export const getUsers = async(req, res) => {
    try{
        // finding something inside a model is time taking, so we need to add await
        const users = await User.find();
        res.status(200).json(users);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


export const addUser = async (req, res)=>{
    const user = req.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
         
    }catch(err) {
        res.status(500).json({message: err.message});
    }
}


export const getUserById = async (req, res) => {
    try{
        const user = await User.findById({_id: req.params.id});
        res.status(200).json(user);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try{
        await User.deleteOne({_id: req.params.id});
        res.status(201).json("User deleted Successfully");
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}

export const editUser = async (req, res) => {
    let user = await User.findById({_id: req.params.id});
    user = req.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: req.params.id}, editUser);
        res.status(201).json(editUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}