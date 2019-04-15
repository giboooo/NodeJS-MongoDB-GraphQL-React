class User {
  constructor(id, name, email, payMethod, pwd){
    this.id = id
    this.name = name
    this.email = email
    this.payMethod = payMethod
    this.pwd = pwd
  }
  // getter & setter

  // id
  set id(id){
    this.id = id
    return this.id
  }
  get id() {
    return this.id
  }

  // name
  set name(name){
    this.name = name
    return this.name
  }
  get name(){
    return this.name
  }
  
  // email
  set email(email){
    this.email = email
    return this.email
  }
  get email(){
    return this.email
  }

  // paymethod
  set payMethod(payMethod){
    this.payMethod = payMethod
    return this.payMethod
  }
  get payMethod(){
    return this.payMethod
  }

  // pwd
  set pwd(pwd){
    this.pwd = pwd
    return this.pwd
  }
  get pwd(){
    return this.pwd
  }

}