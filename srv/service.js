const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
    let {
        add_t
        
    } = this.entities;
    // const c5re = await cds.connect.to('iflow1');
//     this.on('READ', add_t.drafts, async (req,next) => {
//         if(req.data.num1){
//      var data3 =   await SELECT.from(add_t.drafts);
//         console.log(req);
//         let n2 = data3[0].num2;
//         let sum = req.data.num1 + n2
//         await cds.update(add_t.drafts)
//         .set({result:sum}) // Update with new data
//         .where({ id: req.data.id});
//         }
//         return next();
// });


this.on('READ', add_t.drafts, async (req,next) => {
    if(req.data.num1){
 const sum = req.data.num1 + req.data.num2
    console.log(req);
    await cds.update(add_t.drafts)
    .set({result:sum}) // Update with new data
    .where({ id: req.data.id});
    }
    return next();
});

// this.on('READ', add_t.drafts, async (req,next) => {
//     if(req.data.num1){
// //  var data3 =   await SELECT.from(add_t.drafts);
//  const sum = req.data.num1 + req.data.num2
//     console.log(req);
//     // let n2 = data3[0].num2;
//     // let sum = req.data.num1 + n2
//     await cds.update(add_t.drafts)
//     .set({result:sum}) // Update with new data
//     .where({ id: req.data.id});
//     }
//     return next();
// });


});