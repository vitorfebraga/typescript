import {Request,Response} from 'express';
import createUser from './services/CreateUser';
export function helloWorld(request:Request,response:Response){
  const user =createUser({
    email:'vitorferreira.braga@hotmail.com',
    password:'123456',
    techs:[
      'Node.js',
      'ReactJs',
      'React Native',
      {title: 'Javascript',experience: 100},
    ]
   
   
  });
  console.log(user.email);
  return response.json({message:'Hello World'});
  
}
