export default function SignUpLeftBottom({ props, handleChange }) {
  const securityQuestions = [
    "What is your mother's maiden name?",
    "What was the name of your first pet?",
    "What was the make and model of your first car?",
    "What was the name of the town where you were born?",
    "What is your favorite food?",
    "What was the name of your elementary school?",
    "What is the name of your favorite teacher?",
    "What is your best friend's first name?",
    "What was the nameof your first employer?",
    "What is your favorite vacation spot?"
  ];

  return (
    <div className="flex flex-col items-center justify-evenly w-[45%] h-[350px] p-2 ml-2 mr-2 border-2 border-bdr rounded-lg overflow-y-auto">
      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="securityQuestionOne" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Security Question #1
        </label>

        <select
          id="securityQuestionOne"
          name="securityQuestionOne"
          required
          value={props.securityQuestionOne}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105">
          <option value="" disabled>Select A Question</option>

          {securityQuestions.map((question, index) => (
            <option key={index} value={question}>
              {question}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="securityAnswerOne" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Security Answer #1
        </label>

        <input
          type="text"
          id="securityAnswerOne"
          name="securityAnswerOne"
          required
          value={props.securityAnswerOne}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="securityQuestionTwo" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Security Question #2
        </label>

        <select
          id="securityQuestionTwo"
          name="securityQuestionTwo"
          required
          value={props.securityQuestionTwo}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105">
          <option value="" disabled>Select A Question</option>

          {securityQuestions.map((question, index) => (
            <option key={index} value={question}>
              {question}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="securityAnswerTwo" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Security Answer #2
        </label>

        <input
          type="text"
          id="securityAnswerTwo"
          name="securityAnswerTwo"
          required
          value={props.securityAnswerTwo}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="securityQuestionThree" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Security Question #3
        </label>

        <select
          id="securityQuestionThree"
          name="securityQuestionThree"
          required
          value={props.securityQuestionThree}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105">
          <option value="" disabled>Select A Question</option>

          {securityQuestions.map((question, index) => (
            <option key={index} value={question}>
              {question}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="securityAnswerThree" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Security Answer #3
        </label>

        <input
          type="text"
          id="securityAnswerThree"
          name="securityAnswerThree"
          required
          value={props.securityAnswerThree}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  );
};