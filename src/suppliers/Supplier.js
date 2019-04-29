class Client extends User {
  constructor (id, name, email, payMethod, pwd, siretNum, address, invoices){
    
    // parent
    super(id, name, email, payMethod, pwd)
    
    this.siretNum = siretNum
    this.address = address
    this.invoices = invoices
  
  }
}