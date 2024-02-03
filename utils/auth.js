import { compare, hash } from "bcryptjs";

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

function shorten(title) {
  const newTitle = title.slice(0, 10);
  return newTitle;
}

function sumProduct(product) {
  
  return  product.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2);
 
}
function sumQuantity(product) {
  return  product.reduce((acc, cur) => acc + cur.quantity, 0);
}
function productQuantity(state,id) {
  const index = state.selectedItems.findIndex(i=>i.id==id)
  if(index==-1){
    return 0
  }else{
    return state.selectedItems[index].quantity
  }
}
export { hashPassword, verifyPassword, shorten, sumProduct,sumQuantity,productQuantity };
