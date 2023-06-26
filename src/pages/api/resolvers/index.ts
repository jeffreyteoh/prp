import axios from "axios";
import sendEmail from "../../../lib/email/sendEmail";
import crypto from 'node:crypto';

export const resolvers = {
  Query: {
    getUsers: async () => {
        const users = await axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url
        }));
    },
    getUser: async (_, args) => {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url
        };
    },
  },
  Mutation: {
    sendEmail: async (_, args, context) => {
      const {email, subject} = args;
      const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

      let formData = new FormData();
    
      formData.append('secret', process.env.RECAPTCHA_SECRETKEY || "");
      formData.append('response', args.token);
      formData.append('remoteip', context.req.connection.remoteAddress);
      formData.append('idempotency_key', crypto.randomUUID());	

      const result = await fetch(url, {
        body: formData,
        method: 'POST',
      });

      const data = await result.json();

      if (!data) {
        return {success: false};
      }

      const sub_result = await fetch(url, {
        body: formData,
        method: 'POST',
      });

      const sub_data = await sub_result.json();

      if (!sub_data) {
        return {success: false};
      }


      args.datetime = new Date().toISOString();

      try {

        await sendEmail({subject, template: 'contact', context: args});
        await sendEmail({email, subject, template: 'received', context: args});

        return {
          success: true      
        }
      }
      catch (error) {
        console.log(error);

        return {
          success: false      
        }
      }
    }
  } 
};