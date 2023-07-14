export const fields = [
         {
           name: "name",
           required: true,
         },
         {
           name: "surname",
           required: true,
         },
         {
           name: "phone_num",
           required: true,
           min: 9,
           max: 13,
         },
         {
           name: "phone_num2",
           min: 9,
           max: 13,
         },
         {
            name:'birth_date',
            required:true,
         },
         {
            name:'address',
            required:true,
         },
         {
            name:"passport",
            required:true,
            min:7,
         },
         {
            name:"education",
            required:true,
         },
         {
            name:"university",
            required:true,
         }
       ];