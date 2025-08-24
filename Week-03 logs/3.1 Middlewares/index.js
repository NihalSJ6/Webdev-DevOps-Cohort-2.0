const express = require("express");
const zod = require("zod");

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());



//definign the schema
const schema = zod.object({
    email : zod.string(),
    password: zod.string(),
    country : zod.literal('IN').or(zod.literal("US")),
    kidneys: z.array(z.number())
})


app.get('/',  (req, res) => {
    res.send('hello there')
});

app.post("/health-checkup", (req, res) => {
    //kidneys = [1,2]

    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(!response.success) {
        res.status(411).json({
            msg : "input is invalid"
        })
    }

    else {
        res.send({
        response
    })

    console.log(response);
    
    }

    
});



// Start server
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
