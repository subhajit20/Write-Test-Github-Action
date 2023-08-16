import express,{Application,Request,Response} from 'express';

const app:Application = express();
const PORT:number = 2000;
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

app.get('/',(_req:Request,_res:Response)=>{
    try{
        _res.status(200).json({
            msg:"This is home route..."
        })
    }catch(e){
        _res.status(500).json({
            ERROR:"Something went wrong..."
        })
    }
})

app.post('/',(_req:Request,_res:Response)=>{
    try{
        const name = _req.body;
        _res.status(200).json({
            msg:name
        })
    }catch(e){
        _res.status(500).json({
            ERROR:"Something went wrong..."
        })
    }
})

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;