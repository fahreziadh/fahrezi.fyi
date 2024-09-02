"use server";

export const sendNotificationEmail = async (email: string, message: string) => {
  if (!process.env.EMAIL_PLUNK_API_KEY) {
    throw new Error("EMAIL_PLUNK_API_KEY is not set");
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.EMAIL_PLUNK_API_KEY}`,
    },
    body: `{"to":"fahreziadh@gmail.com","subject":"New Email From ${email}","body":"${message}","subscribed":true,"reply":"${email}","headers":{}}`,
  };

  await fetch("https://api.useplunk.com/v1/send", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
