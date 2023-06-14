import React from "react";

export default function CommentForm() {
  return (
    <form className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
      <h3 className="text-sm text-yellow-500">Enjoy this article?</h3>
      <h4 className="text-3xl font-bold">Leave a comment below</h4>
      <hr className="py-3 mt-2" />
      <label className="block mb-5">
        <span className="text-gay-700">Name:</span>
        <input
          className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 hover:border-yellow-500 
          focus:border-yellow-500"
          placeholder="Enter your name"
          type="text"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gay-700">Email:</span>
        <input
          className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 hover:border-yellow-500 
          focus:border-yellow-500"
          placeholder="Enter your email"
          type="text"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gay-700">Comment:</span>
        <textarea
          className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 hover:border-yellow-500 
          focus:border-yellow-500"
          placeholder="Enter your comment"
          rows={8}
        ></textarea>
      </label>
    </form>
  );
}
