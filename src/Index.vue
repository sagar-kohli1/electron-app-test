<template>
<div class="" >
    <h1>WRO 3450 | Box Number : 1</h1>

<table  id="sbTable" class="table">
   <thead >
      <tr  scope="row">
         <th  title="" scope="col"></th>
         <th  title="Wave Id" id="col_1" scope="col">Wave Id</th>
         <th  title="Name" id="col_2" scope="col">Name</th>
         <th  title="Number of Orders" id="col_3" scope="col">Number of Orders</th>
         <th  title="Updated By User" id="col_4" scope="col">Updated By User</th>
      </tr>
   </thead>
   <tbody >
      <tr  scope="row">
         <td  id="0_0" scope="col" class="toggle">
            <div data-v-ce013b0c=""  vc="" mapper="toggle">
               <div data-v-ce013b0c="" class="toggle">
                  
               </div>
            </div>
         </td>
         <td  id="0_1" scope="col" class="id"><span  title="1">1</span></td>
         <td  id="0_2" scope="col" class="name"><span  title="12018-03-28T00:00:00">12018-03-28T00:00:00</span></td>
         <td  id="0_3" scope="col" class="numberOfOrders"><span  title="627">627</span></td>
         <td  id="0_4" scope="col" class="updatedByUserId"><span  title="26944">26944</span></td>
      </tr>
      <tr >
         <td  colspan="100%" class="no-border no-padding allow-overflow">
            <!---->
         </td>
      </tr>
   </tbody>
</table>

     
    </div>
</template>

<script>
  import router from './../router'
  export default {
    name: 'landing-page',
    methods: {
      openlink (path) {
        router.push({name: path, params: {}})
      }
    }
  }
</script>