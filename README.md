<div align=center>
  <h2>Trabalho rest-api de DS2 - Eleições</h2>
  <img src="https://istoe.com.br/wp-content/uploads/2020/12/73.jpg" style="width:320px;"/>
</div>

## Description
  **Simple REST API para cadastrar politicos.**
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
  
* Politico

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
  
  **Need Token in headers:{authorization:token}**
  
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

  **Need Token in headers:{authorization:token}**

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
  
  **Need Token in headers:{authorization:token}**

  * PUT     /partido/:id 
 
        {
          numero:integer?,   
          name:string?,
          logo:string?
        }

  **Need Token in headers:{authorization:token}**

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
  
  **Need Token in headers:{authorization:token}**

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
    
  **Need Token in headers:{authorization:token}**
  
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
      
