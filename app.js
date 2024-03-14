const config = require('./db')
const  sql = require('mssql')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

// configurações seguindo a documentação do body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//constante que recebe a conexão do banco de dados.
const db = new sql.Request()


//view engine -- 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//teste variavel ususarios
/*
let l = {[
  id='1', nome='tom',idade='26',profissao='tecnico'
]
}
*/

let l = [{
  id:'1', nome:'tom',idade:'26',profissao:'tecnico'
}]


//Rota principal 
app.route('/').get(function(req,res){
  res.render('main') //{titulo: 'Express'})
})


//Rota para acessar o formulario de cadastro de filmes
app.route('/inserir').get(function(req,res){
  res.render('inserir' , {movie : {}} ) 
})

//Rota para acessar o formulario de editar filmes
//app.route('/editar').get(function(req,res){
//  res.render('editar' , {movie : {}} ) 
//})

//Rota para enviar os dados pelo metodo POST
app.route('/Form').post(function(req,res){
   db.query("insert into TITULOS ([titulo],[genero]) values ('"+req.body.titulo+"','"+req.body.genero+"')", function(err, data){
    if(err){
      console.log(err)
    }
   }); 
   res.redirect('/lista')
   
    
   
 });
//Rota para listar os filmes
app.route('/lista').get(function(req,res){
  db.query('select * from titulos' , function(err, resultado){
    //let lista = JSON.stringify(lista);
    if(err){
      console.log(err)
    }else{
    //console.log(data)
    res.render('lista', {lista : resultado.recordset})
    console.log(resultado)
    }
  })
})



//Rota para buscar um dado para editar
app.route('/edit/:id').get(function(req,res){
  db.query('select * from titulos where id = ('+req.params.id+')', function(err, data){
    if(err){
     // res.console.log('Erro: '+ err)
      console.log(err)
    }else{
      //res.send('resultado' + JSON.stringify(data.recordset) )
       console.log(data)
      res.render('editar', {movie : data.recordset})
       //res.render('editar', {movie : data})
    }
  })
})



//Rota para editar os dados pelo metodo POST
app.route('/edit/:id').post(function(req,res){

  db.query("update titulos SET titulo = '"+req.body.titulo+"', genero = '"+req.body.genero+"' where id = "+req.params.id+" ", function(err,data){
  if(err){
    res.send('Erro' + err)
  }
  console.log(data)
  res.redirect('/lista')
 }) 
 
});



//Rota para receber os dados de filmes que será DELETADO
app.route('/delete/:id').get(function(req,res){

  db.query("delete from titulos where id = "+req.params.id+" ", function(err,data){
  if(err){
    res.send('Erro' + err)
  }
  console.log(data)
  res.redirect('/lista')
 }) 
 
});



app.listen(7000, function(){
  console.log("Server ON")
})