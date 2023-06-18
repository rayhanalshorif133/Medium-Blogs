import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

export default function CommentForm(props: any) {
  const post = props.post;

  const [submitted, setSubmitted] = useState(false);

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const formHandleSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch("/api/createComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setSubmitted(false);
      });
  };

  return (
    <>
      {submitted ? (
        <div className="text-center justify-center flex flex-col p-10 bg-yellow-500 text-white max-w-2xl mx-auto mb-10">
          <h3 className="text-3xl font-bold">Thank you for your submission!</h3>
          <p className="text-lg">
            Your comment will be reviewed and published shortly.
          </p>
        </div>
      ) : (
        <>
          <form
            className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
            onSubmit={handleSubmit(formHandleSubmit)}
          >
            <h3 className="text-sm text-yellow-500">Enjoy this article?</h3>
            <h4 className="text-3xl font-bold">Leave a comment below</h4>
            <hr className="py-3 mt-2" />

            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />

            <label className="block mb-5">
              <span className="text-gay-700">Name:</span>
              <input
                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 hover:border-yellow-500 
          outline-none focus:ring-1"
                placeholder="Enter your name"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </label>
            <label className="block mb-5">
              <span className="text-gay-700">Email:</span>
              <input
                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 hover:border-yellow-500 
          outline-none focus:ring-1"
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                })}
              />
            </label>
            <label className="block mb-5">
              <span className="text-gay-700">Comment:</span>
              <textarea
                className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 hover:border-yellow-500 
          outline-none focus:ring-1"
                placeholder="Enter your comment"
                rows={8}
                {...register("comment", {
                  required: true,
                })}
              ></textarea>
            </label>
            <div className="flex flex-col p-5">
              {errors.name && (
                <span className="text-red-500">Name field is required</span>
              )}
              {errors.email && (
                <span className="text-red-500">Email field is required</span>
              )}
              {errors.comment && (
                <span className="text-red-500">Comment field is required</span>
              )}
            </div>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
}
