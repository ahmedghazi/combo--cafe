import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.NEXT_PUBLIC_MAILJET || "your-api-key",
  apiSecret: process.env.NEXT_PUBLIC_MAILJET_SECRET || "your-api-secret",
});

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return new NextResponse(JSON.stringify({ message: "INVALID_METHOD" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { data } = await req.json(); // res now contains body
    const { email } = data;
    console.log({ email });

    const newContact = await createContact(email);
    if (newContact.statusCode !== 200) {
      return new NextResponse(JSON.stringify(newContact.errorMessage), {
        status: newContact.statusCode,
        headers: { "Content-Type": "application/json" },
      });
    }
    const addToList = await addEmailToList(email, "10494294");
    if (addToList.statusCode !== 200) {
      return new NextResponse(JSON.stringify(addToList.errorMessage), {
        status: addToList.statusCode,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new NextResponse(
      JSON.stringify({ newContact: newContact, addToList: addToList }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    // console.log(error);

    return new NextResponse(JSON.stringify(error), {
      status: error.statusCode,
      headers: { "Content-Type": "application/json" },
    });
  }
}

const createContact = async (email: string, name?: string) => {
  try {
    const { body } = await mailjet.post("contact", { version: "v3" }).request({
      IsExcludedFromCampaigns: "true",
      Name: `${name}`,
      Email: `${email}`,
    });
    console.info("result mailjet create contact", body);
    return {
      statusCode: 200,
      Data: body,
    };
  } catch (error: any) {
    // console.error(error);
    return {
      statusCode: error.statusCode,
      errorMessage: error.ErrorMessage,
    };
  }
};

const addEmailToList = async (email: string, listId: string) => {
  try {
    const { body } = await mailjet
      .post("listrecipient", { version: "v3" })
      .request({
        IsUnsubscribed: "true",
        ContactAlt: `${email}`,
        ListID: `${listId}`,
      });
    // console.info("result mailjet add to list", body);
    return {
      statusCode: 200,
      Data: body,
    };
  } catch (error: any) {
    // console.error(error);
    return {
      statusCode: error.statusCode,
      errorMessage: error.ErrorMessage,
    };
  }
};
