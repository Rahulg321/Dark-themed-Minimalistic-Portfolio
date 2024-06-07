"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const addMemberToAudience = async (email: string) => {
  const data = await resend.contacts.create({
    email: email,
    unsubscribed: false,
    audienceId: "424ec100-cc86-4e26-b70d-756936b42d06",
  });

  console.log(data);
  if (data.error) {
    return {
      payload: data,
      success: false,
    };
  }
  return {
    payload: data,
    success: true,
  };
};

export { addMemberToAudience };
