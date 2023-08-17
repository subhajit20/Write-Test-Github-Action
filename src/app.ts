import express,{Application,Request,Response} from 'express';

const app:Application = express();
export const PORT:number = 2000;
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

app.get('/',(_req:Request,_res:Response)=>{
    try{
        return _res.status(200).json({
            msg:"This is home route..."
        })
    }catch(e){
        return _res.status(500).json({
            ERROR:"Something went wrong..."
        })
    }
})

app.post('/',(_req:Request,_res:Response)=>{
    try{
        const name = _req.body;
        return _res.status(200).json({
            msg:name
        })
    }catch(e){
        return _res.status(500).json({
            ERROR:"Something went wrong..."
        })
    }
})

export default app;