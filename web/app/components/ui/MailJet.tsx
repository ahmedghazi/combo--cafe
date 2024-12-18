"use client";
import React, { useState } from "react";
// import PropTypes from "prop-types"
import jsonp from "jsonp";
// import PropTypes from "prop-types";
// import styled, { css } from "styled-components"
import clsx from "clsx";
import { publish } from "pubsub-js";

type FieldProp = {
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
};

type Props = {
  action: string;
  field: FieldProp;
};

const Mailchimp = (props: Props) => {
  const messages = {
    sending: "sending...",
    success: "Inscription validée. Merci!",
    error: "Erreur :(",
    empty: "E-mail vide.",
    duplicate: "Trop de tentatives d'inscription pour cette adresse e-mail",
    button: "→",
  };

  const { field, action } = props;
  // const { messages } = Mailchimp.defaultProps
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const getButtonMsg = () => {
    switch (status) {
      case "sending":
        return messages.sending;
      case "success":
        return messages.success;
      case "duplicate":
        return messages.duplicate;
      case "empty":
        return messages.empty;
      case "error":
        return messages.error;
      default:
        return messages.button;
    }
  };

  const handleSubmit = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    // alert("submit");
    evt.preventDefault();
    // const values = fields
    //   .map((field) => {
    //     return `${field.name}=${encodeURIComponent(state[field.name])}`
    //   })
    //   .join("&")
    const path = `${action}&EMAIL=${encodeURIComponent(email)}`;
    const url = path.replace("/post?", "/post-json?");

    // const email = state["EMAIL"]

    validateEmail(email) ? sendData() : setStatus("empty");
  };

  const validateEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const sendData = async () => {
    setStatus("sending");
    const payload = {
      email: email,
    };
    console.log(payload);
    // return;
    try {
      const res = await fetch("/api/mailjet-newsletter", {
        method: "POST",
        body: JSON.stringify({ data: payload }),
      });
      const data = await res.json();
      console.log(res);
      console.log(data);
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus(data);
      }
    } catch (error: any) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <div className='mailjet'>
      <div className='title '>Abonnez-vous à notre newsletter ↓</div>
      <form onSubmit={handleSubmit} className={clsx("mailjet--form")}>
        <div className='flex  items-baseline'>
          <input
            {...field}
            role='textbox'
            onChange={({ target }) => setEmail(target.value)}
            className='w-full'
          />
          <button
            // disabled={(status === "sending" || status === "success")}
            type='submit'
            aria-label='submit'
            // className={""}
          >
            <span>→</span>
          </button>
        </div>
      </form>
      {status !== "" && <div className='status py-sm capitalize'>{status}</div>}
    </div>
  );
};
export default Mailchimp;

// Mailchimp.defaultProps = {
//   messages: {
//     sending: "sending...",
//     success: "Inscription validée. Merci!",
//     error: "Erreur :(",
//     empty: "E-mail vide.",
//     duplicate: "Trop de tentatives d'inscription pour cette adresse e-mail",
//     button: "send",
//   },
//   buttonClassName: "",
//   // styles: {
//   //   sendingMsg: {
//   //     color: "#0652DD"
//   //   },
//   //   successMsg: {
//   //     color: "#009432"
//   //   },
//   //   duplicateMsg: {
//   //     color: "#EE5A24"
//   //   },
//   //   errorMsg: {
//   //     color: "#ED4C67"
//   //   }
//   // }
// }

// Mailchimp.propTypes = {
//   action: PropTypes.string,
//   messages: PropTypes.object,
//   fields: PropTypes.array,
//   styles: PropTypes.object,
//   className: PropTypes.string,
//   buttonClassName: PropTypes.string,
// }
