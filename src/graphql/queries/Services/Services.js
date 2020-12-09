const SERVICES = () => `
query{
    services(first:50){      
       data{
          id
          title
          description
          img_card{
             id
             url
          }
          img_cover{
             id
             url
          }          
       }
    }
 }
`;

export default SERVICES;
