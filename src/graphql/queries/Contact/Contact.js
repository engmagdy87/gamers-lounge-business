const CONTACT = () => `
query{
    contactUs{
       id
       map
       information{
          address
          phone
          email
          facebook_link
          instagram_link
          twitter_link
          youtube_link
       }
       img_cover{
          id
          url
       }
       img_facebook{
          id
          url
       }
       img_twitter{
          id
          url
       }
       img_instagram{
          id
          url
       }
       img_youtube{
          id
          url
       }
    }
 }
`;

export default CONTACT;
