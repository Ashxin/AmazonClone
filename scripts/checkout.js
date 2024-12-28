import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

// import '../data/cart-class.js';
//import '../data/backend-practice.js';

//asunc makes a function return a promise.
//whats the point of using this feature? -> asunc lets us use await, lets us wait for a promise to finsh, before going to the next line. await lets us write asynchronous code like normal code.
async function loadPage()
{
  try
  {
    //throw 'error1';
    await loadProductsFetch();
    const value = await new Promise((resolve, reject) =>
      {
        //throw 'error2';
        loadCart(() =>
        {
          //reject('error3');
          resolve('value3');
        });
      });
  } catch(error) 
  {
    console.log('unexpected error. please try again later.');
  }

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();
/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) =>
      {
        loadCart(() =>
        {
          resolve();
        });
      })
]).then((values) =>
{
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary(); 
});
*/
/*
new Promise((resolve) =>
{
  loadProducts(() =>
  {
    resolve('value1');
  });


}).then((value) =>
{
  console.log(value);
  return new Promise((resolve) =>
  {
    loadCart(() =>
    {
      resolve();
    });
  });

  
}).then(() =>
{
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() =>
{
  loadCart(() =>
  {
    renderOrderSummary();
    renderPaymentSummary();
  });

});
*/
