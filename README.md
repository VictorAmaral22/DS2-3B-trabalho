<div align=center>
  <h2>node-rest-api-ds2</h2>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" style="width:320px;"/>
</div>

## Description
  **Simple REST API**
## Routes
 
* Usuários 

  * POST    /usuarios 
  
        {
          name:string,
          email:string,
          senha:string
        }
        
  * POST    /usuarios/auth
  
        {
          email:string,
          senha:string
        }
         
  * GET     /usuarios
  
  * GET     /usuarios/:id
  
  * PUT     /usuarios/ 
  
  **Need Token in headers:{authorization:token}**
  
        {
          name?:string,
          password?:string
        }

  * DELETE  /usuarios
  
* Albums

  **Need Token in headers:{authorization:token}**
  
  * POST    /politico 
        {
          cpf: string,
          name: string,
          foto: string,
          email: string,
          dataNascimento: date,
          cidade: string,
          estado: string,
          pais: string,
          id_partido: integer,
          mandatoAtual: integer
        } 
  
  * GET     /politico 
  
  * GET     /politico/:id 

  * GET     /politico/:id/historico 
  
  * PUT     /politico 
  
        {
          cpf: string?,
          name: string?,
          foto: string?,
          email: string?,
          dataNascimento: date?,
          cidade: string?,
          estado: string?,
          pais: string?,
          id_partido: integer?,
          mandatoAtual: integer?
        }
  
  * DELETE  /politico 
  
        {
          cpf:string
        }
  
* Partido

  **Need Token in headers:{authorization:token}**
  
  * POST    /partido 
  
        {
          numero:integer,   
          name:string,
          logo:string
        }
  
  * GET     /partido
  
  
  * GET     /partido/:id
  

  * GET     /partido/:id/integrantes
  
  
  * PUT     /partido/:id 
 
        {
          numero:integer?,   
          name:string?,
          logo:string?
        }
  
  * DELETE  /partido 
  
        {
          numero:integer
        }

* Mandato

  **Need Token in headers:{authorization:token}**
  
  * POST    /mandato 
  
        {
          id_politico:string,
          numero:integer,
          cidade:string,
          estado:string,
          pais:string,
          cargo:string,
          inicio:date,
          final:date
        }
  
  * GET     /mandato
  
  
  * GET     /mandato/:id
  
   
  * PUT     /mandato/:id 
 
        {
          id_politico:string?,
          numero:integer?,
          cidade:string?,
          estado:string?,
          pais:string?,
          cargo:string?,
          inicio:date?,
          final:date?
        }
  
  * DELETE  /mandato 
  
        {
          id_politico:string
        }


## How to run
* Install Dependencies
        npm install
* Run test

        npm run test
* Init Server

        npm run dev
      
