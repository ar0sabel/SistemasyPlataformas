const express = require('express');  
const path = require('path');  
const app = express();  
const port = 3000;  
// Servir archivos estáticos desde el directorio    
app.use(express.static(path.join(__dirname)));  
app.get('/', (req, res) => {  
    
    res.sendFile(path.join(_dirname, 'taller1.html'));  
});  
app.listen(port, () => {  
    console.log('Server is running at http://localhost:${port}');  
    
        }); 